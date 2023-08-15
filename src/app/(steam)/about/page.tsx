'use client';

import { Box, Center, Text } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <Box py={80}>
      <Center>
        <Box maxW="container.lg" px={6} textAlign="center">
          <Box textStyle="h2" mb={4}>
            About Us
          </Box>
          <Text textStyle={'p'} fontSize="lg">
            Welcome to Our Company, your go-to destination for all things amazing. We&apos;re
            dedicated to providing you with top-quality products and services that make your life
            easier and more exciting. With a focus on innovation, creativity, and customer
            satisfaction, we&apos;re here to exceed your expectations at every turn.
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default AboutSection;
