import { Box, IconButton } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollDownButton = ({ scrollToContent }: { scrollToContent: () => void }) => {
  return (
    <Box
      bg={'white'}
      opacity={'0.2'}
      _hover={{ opacity: 1 }}
      textAlign="center"
      py={6}
      rounded="full"
      onClick={scrollToContent}
    >
      <motion.div>
        <IconButton
          aria-label="Scroll Down"
          icon={<FaArrowDown />}
          rounded={'full'}
          size="lg"
          color="gray.500"
          _hover={{ bg: 'black.600' }}
        />
      </motion.div>
    </Box>
  );
};

export default ScrollDownButton;
