'use client';
import { Box,Text } from '@chakra-ui/react';
import loadingImg from '/public/assets/loaderimg.jpg'
const Loading = () => {
  return (
    <Box pt={'75px'} position="relative" height={'100vh'}>
      <Box
        className="absolute inset-0 z-0"
        bgImage={`url(${loadingImg.src})`}
        bgPosition="center"
        bgSize="cover"
      />
      <Box
        bg={'linear-gradient(to right, #3b3f43 0%, #596164 100%)'}
        className="absolute inset-0 animate-pulse z-10"
      />
      <Box
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        bgImage={`url(${loadingImg.src})`}
        bgPosition="center"
        bgSize="cover"
        fontSize={['3rem', '12vw', '10rem']}
        lineHeight={'450px'}
      >
        Loading...
      </Box>
    </Box>
  );
};

export default Loading;
