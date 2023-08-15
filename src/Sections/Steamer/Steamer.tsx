'use client';

import React from 'react';
import { Container, Grid, Text } from '@chakra-ui/react';
import SteamerText from './SteamerText';
import Reveal from '../../Components/Reveal/Reveal';
import Steamer3D from './Steamer3D';

const SteamerSection = () => {
  return (
    <Container
      mb={{ base: '35px', lg: '110px' }}
      maxW={{ base: 'container.full', md: 'container.xl' }}
    >
      <Reveal withSlide={true}>
        <Text as="h1" textStyle={'h1'} mb={'10px'}>
          Steam keys
        </Text>
      </Reveal>
      <Grid
        templateColumns={[null, null, 'auto', '1.7fr 1fr']}
        alignItems="center"
        justifyContent="center"
        gap={5}
      >
        <SteamerText />
        <Reveal>
          <Steamer3D />
        </Reveal>
      </Grid>
    </Container>
  );
};

export default SteamerSection;
