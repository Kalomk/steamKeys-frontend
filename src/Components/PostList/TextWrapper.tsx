'use client';
import { Text } from '@chakra-ui/react';
import { itemAdded } from '@/hooks/useWeb3Functions';

interface TextWrapperProps {
  child: itemAdded;
}

const TextWrapper: React.FC<TextWrapperProps> = ({ child }) => {
  const toFirstLetterUperCase = (word: string) => {
    return word.substring(0, 1) + word.substring(1);
  };

  if (typeof child !== 'undefined' && child !== null) {
    const filteredChild = Object.fromEntries(
      Object.entries(child).filter(([key]) => key !== 'isPrior' && key !== 'id' && key !== 'image')
    );
    return (
      <>
        {Object.entries(filteredChild).map(([key, value]) => (
          <Text key={key} color={'#f1fa8c'}>
            <Text mr={2} color={'rgb(102, 216, 255)'} as={'span'}>
              {toFirstLetterUperCase(key)}:
            </Text>
            {value}
          </Text>
        ))}
      </>
    );
  } else {
    return <Text>Error</Text>;
  }
};

export default TextWrapper;
