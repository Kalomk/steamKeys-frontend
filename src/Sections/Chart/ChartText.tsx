import Reveal from '@/Components/Reveal/Reveal';
import { Box, Container, Text } from '@chakra-ui/react';

const ChartText = () => {
  return (
    <Container maxW="container.lg" py={5}>
      <Box textStyle={'p'}>
        <Reveal withSlide={true}>
          <Text fontSize="lg" textAlign="justify">
            Welcome to Our Gaming Preferences! Discover the variety of gaming genres that our Steam
            Keys Store has to offer. Immerse yourself in thrilling adventures, whether you&apos;re a
            fan of Role-Playing Games, enjoy the strategic challenges of Real-Time Strategy Games,
            or prefer the fast-paced action of First-Person Shooters. We cater to every gaming
            preference!
          </Text>
        </Reveal>
        <Reveal withSlide={true}>
          <Text fontSize="lg" textAlign="justify" mt={4}>
            Our curated selection includes Adventure Games for the story-driven explorers, Puzzle
            Games to engage your mind, and Sports Games for those who enjoy friendly competition.
            Explore the chart to see the distribution of gaming preferences among our community.
            Your favorite genre might just be the next gaming journey you embark on!
          </Text>
        </Reveal>
      </Box>
    </Container>
  );
};

export default ChartText;
