import Reveal from '@/Components/Reveal/Reveal';
import { SimpleGrid, Box, Flex } from '@chakra-ui/react';
import ChartText from './ChartText';
import PieChart from './PieChart';

const ChartSection = () => {
  return (
    <>
      <Box>
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Reveal withSlide={true}>
            <Box textStyle={'h2'}>Distribution</Box>
          </Reveal>
        </Flex>
      </Box>
      <SimpleGrid alignItems={'center'} justifyContent={'center'} minChildWidth={'300px'}>
        <PieChart />
        <ChartText />
      </SimpleGrid>
    </>
  );
};

export default ChartSection;
