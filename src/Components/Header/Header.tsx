'use client';
import { Image, Flex, Button, HStack, chakra, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import EncryptButton from '@/Sections/CryptoSection/EncryptedButton';

const Header = () => {
  const linkData = ['Main page', 'About', 'Lets buy/sell keys'];
  const links = ['home', 'about', 'trade'];
  const [display, changeDisplay] = useState('none');
  const pathname = usePathname();
  return (
    <chakra.header zIndex={50} top={0} left={0} w="100%" position={'fixed'} id="header">
      <Flex bg={'#171a21'} w="100%" px="6" py="3" align="center" justify="space-between">
        <Image
          alt="logo"
          src={
            '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png'
          }
          h="50px"
        />
        <HStack display={['none', 'none', 'flex', 'flex']} color={'white'} as="nav" spacing="5">
          {linkData.map((item, i) => (
            <Link href={links[i]} key={i}>
              <Button variant="nav">
                <Text as={pathname === `/${links[i]}` ? 'ins' : 'samp'}>{item}</Text>
              </Button>
            </Link>
          ))}
        </HStack>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          color={'whiteAlpha.900'}
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Flex
          w="100vw"
          display={display}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflow="hidden"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay('none')}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            {linkData.map((item, i) => (
              <Link href={links[i]} key={i}>
                <Button variant="nav">
                  <Text as={'span'}>{item}</Text>
                </Button>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </chakra.header>
  );
};
export default Header;
