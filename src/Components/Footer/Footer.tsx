import { Box, Center, Link, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" textStyle={'p'}>
      <Center py={6}>
        <VStack spacing={2}>
          <Text>&copy; 2023 Steam keys </Text>
          <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
            Privacy Policy
          </Link>
          <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
            Terms of Service
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default Footer;
