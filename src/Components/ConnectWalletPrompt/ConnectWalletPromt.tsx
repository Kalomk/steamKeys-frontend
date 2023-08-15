'use client';
import { Box, Center, Text } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWalletPrompt = () => {
  return (
    <Box p={4}>
      <Center>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Connect your wallet to continue
        </Text>
      </Center>
      <Center>
        <ConnectButton />
      </Center>
    </Box>
  );
};

export default ConnectWalletPrompt;
