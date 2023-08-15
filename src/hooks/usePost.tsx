import Web3 from 'web3';
import { useNotification } from 'web3uikit';
import useWeb3Functions from './useWeb3Functions';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ADDED_POST, GET_BUYED_POST } from '@/constants/graphs';

interface AddPostVariantOfFunctions {
  method: 'addPost';
  postData: PostTypes;
}
interface BuyItemFromThePostVariantOfFunctions {
  method: 'BuyItemFromThePost';
  postId: string;
  buyerInfo: BodyReqFromBuyingPost;
  buyingPrice: string;
}

interface PostTypes {
  [key: string]: string | any;
}

interface BodyReqFromAddPost {
  email: string;
  secretKey: string;
}

interface BodyReqFromBuyingPost {
  buyerEmail: string;
  userName: string;
  postId?: string;
}

interface PosDataType {
  func: (args: any) => Promise<void> | undefined;
  args: string[];
  bodyReq: BodyReqFromAddPost & BodyReqFromBuyingPost;
  apiLink: string;
}

const usePost = () => {
  const priceInWei = (price: string) => Web3.utils.toWei(price, 'ether');
  const { addPost, BuyItemFromThePost } = useWeb3Functions();
  const dispatch: any = useNotification();
  const { refetch } = useQuery(GET_ADDED_POST);
  const [buyItem, { error }] = useMutation(GET_BUYED_POST);

  const functionTypeDetector = (
    props: AddPostVariantOfFunctions | BuyItemFromThePostVariantOfFunctions
  ) => {
    const checkPostDataType = (method: string) => {
      switch (props.method) {
        case 'addPost':
          const { email, secretKey, description, title, image, price, isPrior } = props.postData!;
          return {
            func: addPost,
            args: [description, title, image, priceInWei(price), isPrior],
            bodyReq: { email, secretKey },
            apiLink: '/api/addPost',
          } as PosDataType;
        case 'BuyItemFromThePost':
          const { buyerEmail, userName } = props.buyerInfo!;
          const { postId } = props;
          return {
            func: BuyItemFromThePost,
            args: [props.postId, props.buyingPrice!],
            bodyReq: { buyerEmail, userName, postId },
            apiLink: '/api/buyItem',
          } as PosDataType;
        default:
          throw new Error(`Invalid method: ${method}`);
      }
    };

    const setPost = async ({ func, args, bodyReq, apiLink }: PosDataType) => {
      try {
        const handleDataPost = async () => {
          const response = await fetch(apiLink, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyReq),
          });

          if (response.ok) {
            // Data saved successfully
            console.log('Data saved successfully');
            if (props.method === 'BuyItemFromThePost') {
              const { postId } = props;
              buyItem({
                variables: {
                  buyerId: postId,
                  buyerEmail: bodyReq.buyerEmail,
                  userName: bodyReq.userName,
                },
              });
              dispatch({
                type: error ? 'error' : 'buyinfo',
                message: 'Transaction Complete!',
                title: `Transaction Notification and item bought`,
                position: 'topR',
                icon: 'bell',
              });
            } else {
              refetch();
              dispatch({
                type: 'info',
                message: 'Transaction Complete!',
                title: 'Transaction Notification',
                position: 'topR',
                icon: 'bell',
              });
            }
          } else {
            // Error saving data
            console.error('Error saving data:', response.statusText);
          }
        };
        await func({
          params: args,
          onSucces: handleDataPost,
          onError: () => console.log('Error'),
        });
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    const methodType = checkPostDataType(props.method);
    setPost(methodType);
  };

  return { functionTypeDetector };
};

export default usePost;
