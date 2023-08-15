import { Box, SimpleGrid } from '@chakra-ui/react';
import PostList from '../PostList/PostList';
import ConnectWalletPrompt from '../ConnectWalletPrompt/ConnectWalletPromt';
import AddPost from '../AddPost/AddPost';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';

const Posts = () => {
  const { address } = useAccount();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    setIsWalletConnected(!!address); // Set isWalletConnected to true if address exists, otherwise false
  }, [address]);

  return (
    <>
      {isWalletConnected ? (
        <SimpleGrid minChildWidth="300px" alignItems="center" justifyContent="center" spacing={10}>
          <AddPost />
          <PostList />
        </SimpleGrid>
      ) : (
        <Box mt={'80px'}>
          <ConnectWalletPrompt />
        </Box>
      )}
    </>
  );
};

export default Posts;
