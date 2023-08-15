'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';
import SteamerSection from '@/Sections/Steamer/Steamer';
import Loading from '../loading';
import GamesSection from '@/Sections/Games/GamesSection';
import ChartSection from '@/Sections/Chart/ChartSection';
import CryptoSection from '@/Sections/CryptoSection/CryptoSection';
import Footer from '@/Components/Footer/Footer';
import ScrollDownButton from '@/Components/ScrollDownButton/ScrollDownButton';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<null | HTMLDivElement>(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container maxW="container.full" pt="80px">
            <SteamerSection />
            <GamesSection />
            <ChartSection />
          </Container>
          <Box ref={contentRef}>
            <CryptoSection />
          </Box>
          <Container maxW="container.full" pt="25px">
            <Footer />
          </Container>
          <Box position={'fixed'} top={'60vh'} right={'50px'}>
            <ScrollDownButton scrollToContent={scrollToContent} />
          </Box>
        </>
      )}
    </>
  );
};

export default HomePage;
