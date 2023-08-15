'use client';
import { Button, Card, CardBody, Image, Text } from '@chakra-ui/react';
import TextWrapper from './TextWrapper';
import ContactDataSender from './ContactDataSender';
import { itemAdded } from '@/hooks/useWeb3Functions';
import { useState } from 'react';
import defaultImg from '/public/assets/defaultImg.png';
import { decompress } from '@/utils';
import { useMemo } from 'react';

interface PostItemProps {
  posts: itemAdded[];
}

const PostItem: React.FC<PostItemProps> = ({ posts }) => {
  const [isFormShowMap, setIsFormShowMap] = useState<{ [key: string]: boolean }>({});

  const showImage = (image: string) =>
    image ? 'data:image/svg+xml;base64,' + decompress(image) : defaultImg.src;

  const handleToggleFormShow = (postId: string) => {
    setIsFormShowMap((prevMap) => ({
      ...prevMap,
      [postId]: !prevMap[postId],
    }));
  };

  const memoizedShowImage = useMemo(() => showImage, []);

  return (
    <Card bg={'#1b2838'} maxH={'60vh'} overflow={'scroll'}>
      <CardBody>
        {posts.map((item) => (
          <Card
            mb={5}
            bg={'rgba(12,10,29,1.0)'}
            className="overflow-hidden relative"
            border={'1px'}
            borderColor={item.isPrior ? 'blue.500' : ''}
            key={item.id}
            position="relative"
          >
            <CardBody>
              {item.isPrior && (
                <Text
                  position={'absolute'}
                  top={'15px'}
                  right={'10px'}
                  border={'1px'}
                  borderColor={'blue.500'}
                  color={'white'}
                  p={'2'}
                >
                  Prior
                </Text>
              )}
              <Image
                borderRadius="full"
                boxSize="50px"
                bg={'white'}
                src={memoizedShowImage(item.image)}
                alt="image"
              />
              <TextWrapper child={item} />
              <Button
                border={'1px'}
                borderColor={'red.500'}
                mt={'10px'}
                onClick={() => handleToggleFormShow(item.id)}
                colorScheme="red"
                size={'md'}
              >
                Buy
              </Button>
            </CardBody>
            <ContactDataSender
              id={item.id}
              price={item.price}
              isFormShow={isFormShowMap[item.id] || false} // Pass the isFormShow state for the specific postId
              setIsShow={() => handleToggleFormShow(item.id)} // Pass the correct setIsShow function for the specific postId
            />
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};

export default PostItem;
