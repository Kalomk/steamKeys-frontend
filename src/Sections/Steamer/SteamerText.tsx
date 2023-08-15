'use client';

import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Reveal from '../../Components/Reveal/Reveal';
import Typical from 'react-typical';

const SteamerText = () => {
  const text = [
    {
      span: 'Enhanced Privacy and Security:',
      text: 'Our service offers an added layer of privacy by enabling users to make purchases without revealing personal and sensitive financial information.',
    },
    {
      span: 'Transparency and Immutability:',
      text: ' All transactions conducted through our service are recorded on the blockchain, ensuring transparency and immutability.',
    },
    {
      span: 'Global Accessibility:',
      text: 'With crypto transactions, geographical barriers are eliminated.',
    },
  ];
  return (
    <Box textStyle={'p'}>
      <Reveal withSlide={true}>
        <Text>
          Buying Steam keys with crypto is an exciting and innovative way to enhance the gaming
          experience for enthusiasts and gamers alike. Crypto, short for cryptocurrency, has
        </Text>
      </Reveal>
      <Reveal withSlide={true}>
        <Text pb={'20px'}>
          revolutionized the way we conduct transactions, offering a decentralized, secure, and fast
          payment method that&apos;s now being embraced by the gaming community. One of the most
          significant advantages of buying Steam keys with crypto is the added layer of privacy it
          provides.
        </Text>
      </Reveal>
      <Reveal withSlide={true}>
        <Text pb={'20px'} pt={'10px'} textStyle={'h2'}>
          Prons of using our service to buy Steam keys with crypto:
        </Text>
      </Reveal>
      <Box mt={'10px'} pb={'25px'} pl={[null, null, '15px', '20px', '30px']}>
        <UnorderedList>
          {text.map((item) => (
            <Reveal key={item.span} withSlide={true}>
              <ListItem pb={'7px'}>
                <Text as={'span'} color={'black'}>
                  {item.span}
                </Text>
                <Typical steps={[item.text]} loop={1} wrapper="p" />
              </ListItem>
            </Reveal>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default SteamerText;
