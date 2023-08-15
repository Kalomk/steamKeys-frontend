import { Container, SimpleGrid } from '@chakra-ui/react';
import GamesText from './GamesText';
import ImageGrid from './ImageGrid';

const GamesSection = () => {
  return (
    <Container
      maxW={{ base: 'container.full', md: 'container.xl' }}
      mb={{ base: '35px', lg: '110px' }}
    >
      <SimpleGrid minChildWidth={'300px'} gap={'10px'}>
        <GamesText />
        <ImageGrid />
      </SimpleGrid>
    </Container>
  );
};

export default GamesSection;
