'use client';

import React from 'react';
import { Container, Box, Flex } from '@chakra-ui/react';
import Posts from '@/Components/Posts/Posts';
import { Providers } from './provider';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Typical from 'react-typical';
import Reveal from '@/Components/Reveal/Reveal';

const TradePage = () => {
  return (
    <Container maxW="container.lg" pt={'80px'}>
      <Box position={'relative'} zIndex={100}>
        <Providers>
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box textStyle={'h1'}>
              <Reveal>
                <Typical steps={['Trade', 1000]} loop={1} />
              </Reveal>
            </Box>
            <Box>
              <ConnectButton />
            </Box>
          </Flex>
          <Posts />
        </Providers>
      </Box>
    </Container>
  );
};

export default TradePage;
