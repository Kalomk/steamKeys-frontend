import Reveal from '@/Components/Reveal/Reveal';
import { Box, Flex } from '@chakra-ui/react';
import CryptoModel from './CryptoModel';
import EncryptButton from './EncryptedButton';

const CryptoSection = () => {
  return (
    <Box
      zIndex={1}
      w="100%"
      h="500px"
      bgGradient="linear(to-r, green.100, green.200)"
      p={4}
      color="white"
      textAlign="center"
      boxShadow="lg"
      position={'relative'}
    >
      <Flex alignContent={'center'} justifyContent={'center'}>
        <Reveal withSlide={true}>
          <Box textStyle={'h2'} color={'black'}>
            Buy or Sale Steam keys
          </Box>
        </Reveal>
      </Flex>
      <Box
        zIndex={10}
        left={'50%'}
        top={'50%'}
        transform={'translate(-50%,-50%)'}
        position={'absolute'}
      >
        <Reveal>
          <CryptoModel />
        </Reveal>
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Reveal withSlide={true}>
            <Box className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
              <EncryptButton />
            </Box>
          </Reveal>
        </Flex>
      </Box>
    </Box>
  );
};

export default CryptoSection;
