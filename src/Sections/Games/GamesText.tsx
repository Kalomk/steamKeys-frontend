import Reveal from '@/Components/Reveal/Reveal';
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

const GamesText = () => {
  return (
    <Box textStyle="p">
      <Reveal withSlide={true}>
        <Box textStyle={'h2'} mb={4}>
          Welcome to Our Steam Keys Store!
        </Box>
      </Reveal>
      <Reveal withSlide={true}>
        <Text mb={6}>
          Indulge in the captivating world of gaming with our vast collection of Steam keys. Immerse
          yourself in thrilling adventures, conquer new realms, and experience the joy of exploring
          different genres. Whether you&apos;re a casual player or a hardcore gamer, our store
          offers an extensive range of titles that cater to every gaming preference.
        </Text>
      </Reveal>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <Reveal withSlide={true}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  About Us
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Reveal>
          </h2>
          <AccordionPanel>
            <Text>
              Our Steam Keys Store is dedicated to bringing you the best gaming experience. With a
              passion for gaming and a commitment to quality, we strive to provide a diverse
              selection of games that cater to all tastes.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <Reveal withSlide={true}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Game Genres
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Reveal>
          </h2>
          <AccordionPanel>
            <Text>
              Explore a wide range of game genres, including role-playing games, action-adventure,
              simulation, strategy, and more. We ensure that you have access to a variety of gaming
              experiences to choose from.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <Reveal withSlide={true}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Latest Releases
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Reveal>
          </h2>
          <AccordionPanel>
            <Text>
              Stay up-to-date with the latest game releases. Our store is constantly updated with
              new titles, allowing you to discover and play the most recent games in the gaming
              world.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <Reveal withSlide={true}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Customer Reviews
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Reveal>
          </h2>
          <AccordionPanel>
            <Text>
              Stay up-to-date with the latest game releases. Our store is constantly updated with
              new titles, allowing you to discover and play the most recent games in the gaming
              world.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <Reveal withSlide={true}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Support and Contact
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Reveal>
          </h2>
          <AccordionPanel>
            <Text>
              Stay up-to-date with the latest game releases. Our store is constantly updated with
              new titles, allowing you to discover and play the most recent games in the gaming
              world.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <Reveal withSlide={true}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Crypto sup!
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Reveal>
          </h2>
          <AccordionPanel>
            <Text>
              Stay up-to-date with the latest game releases. Our store is constantly updated with
              new titles, allowing you to discover and play the most recent games in the gaming
              world.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default GamesText;
