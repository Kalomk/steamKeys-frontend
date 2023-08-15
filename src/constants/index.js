import contractAddresses from './contractAdresses.json';
import abi from './contractAbi.json';
import Web3 from 'web3';

const chainId = 11155111;
const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;

export const createContract = () => {
  if (window) {
    const { ethereum } = window;
    if (ethereum) {
      const web3 = new Web3(ethereum);
      return new web3.eth.Contract(abi, raffleAddress);
    }
  }
};
