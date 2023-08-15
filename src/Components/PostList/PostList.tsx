'use client';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  TabIndicator,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import useWeb3Functions, { itemAdded } from '@/hooks/useWeb3Functions';
import PostItem from './PostItem';
import { useAccount } from 'wagmi';

const PostList = () => {
  const { posts, isLoading } = useWeb3Functions();
  const { address } = useAccount();
  const filterType = ['all', 'mine', 'prior'];

  const filteredPosts = {
    all: posts as itemAdded[],
    mine: posts.filter(
      (item) => item.sender.toLowerCase() === address?.toLowerCase()
    ) as itemAdded[],
    prior: posts.filter((item) => item.isPrior) as itemAdded[],
  };

  return (
    <Box>
      <Card bg="#1b2838" color="white">
        <CardBody>
          <Heading pb="10px">Recent posts:</Heading>
          <Tabs position="relative" variant="unstyled">
            <TabList>
              {filterType.map((item) => (
                <Tab key={item}>{item.charAt(0).toUpperCase() + item.slice(1)} posts</Tab>
              ))}
            </TabList>
            <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
            <TabPanels>
              {filterType.map((item) => (
                <TabPanel key={item}>
                  {isLoading ? (
                    <Flex mt={'15px'} alignItems={'center'} justifyContent={'center'}>
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.900"
                        size="xl"
                      />
                    </Flex>
                  ) : filteredPosts[item as keyof typeof filteredPosts].length === 0 ? (
                    <Box mt={'15px'}>Sorry,no items</Box>
                  ) : (
                    <PostItem posts={filteredPosts[item as keyof typeof filteredPosts]} />
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </Box>
  );
};

export default PostList;
