import { useEffect } from 'react';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { createContract } from '../constants';
import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';

interface MethodTypes {
  params: string[];
  method?: 'addPost' | 'BuyItemFromThePost';
  value: string;
  onSucces: () => any;
  onError: () => any;
  isPrior?: boolean;
}

export interface itemAdded {
  sender: string;
  description: string;
  title: string;
  price: string;
  id: string;
  isPrior: boolean;
  image: string;
}

const BLANK_ADDRESS = '0x0000000000000000000000000000000000000000';
const priceInWei = (price: string) => Web3.utils.toWei(price, 'ether');

const useWeb3Functions = () => {
  const [contract, setContract] = useState<Contract | undefined>(undefined);
  const { address } = useAccount();
  const [posts, setPosts] = useState<itemAdded[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const createPosts = async () => {
    if (contract) {
      try {
        const totalPost = await contract?.methods?.getTotalPosts().call();
        setPosts([]);
        setIsLoading(true);
        const notBlankPosts: any = [];
        for (let i = 0; i < +totalPost; i++) {
          const getPostFromSC = await contract?.methods?.getPost(i).call();
          const postObj = {
            sender: getPostFromSC['sender'],
            id: getPostFromSC['id'],
            description: getPostFromSC['description'],
            title: getPostFromSC['title'],
            price: getPostFromSC['price'],
            isPrior: getPostFromSC['isPrior'],
            image: getPostFromSC['image'],
          };
          if (postObj.sender !== BLANK_ADDRESS) {
            notBlankPosts.push(postObj);
          }
        }
        notBlankPosts.sort((_: any, b: itemAdded) => (b.isPrior ? 1 : -1));
        setPosts(notBlankPosts);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    address && setContract(createContract());
  }, [address]);

  useEffect(() => {
    createPosts();
  }, [contract]);

  const minEntranceFee = Web3.utils.toWei('0.01', 'ether');

  const web3ContractMethod = async ({
    params,
    onSucces,
    onError,
    method,
    value,
    isPrior = false,
  }: MethodTypes) => {
    if (contract && method) {
      try {
        if (isPrior) {
          const currentValue = parseFloat(Web3.utils.fromWei(value, 'ether'));
          const increasedValue = currentValue + 0.002;
          value = Web3.utils.toWei(increasedValue.toString(), 'ether');
        }

        value = Web3.utils.toBN(value).add(Web3.utils.toBN(minEntranceFee)).toString();
        const methodObject = await contract.methods[method](...params);
        await methodObject
          .send({
            from: address,
            gas: 3000000,
            value,
            gasLimit: null,
          })
          .once('error', function (error: any, receipt: Object) {
            console.log(`${[error]}: ${receipt}`);
            onError();
          })
          .once('confirmation', function (_: any, receipt: { status: boolean }) {
            if (receipt.status === true) {
              onSucces();
            }
          });
        createPosts();
      } catch (e) {
        console.log(e);
      }
    }
  };
  const addPost = ({
    params: [description, title, image, price, isPrior],
    onSucces: successCallback,
    onError: onErrorCalback,
  }: MethodTypes) =>
    web3ContractMethod({
      params: [description, title, image, price, isPrior],
      method: 'addPost',
      onSucces: successCallback,
      onError: onErrorCalback,
      isPrior: !!isPrior,
      value: price,
    });

  const BuyItemFromThePost = ({
    params: [postId, buyingPrice],
    onSucces: successCallback,
    onError: onErrorCalback,
  }: MethodTypes) =>
    web3ContractMethod({
      params: [postId],
      method: 'BuyItemFromThePost',
      onSucces: successCallback,
      onError: onErrorCalback,
      value: buyingPrice,
    });

  return { addPost, BuyItemFromThePost, posts, isLoading };
};

export default useWeb3Functions;
