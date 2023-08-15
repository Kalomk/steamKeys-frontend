'use client';

import Header from '@/Components/Header/Header';
import { Box } from '@chakra-ui/react';

export default function SteamLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
