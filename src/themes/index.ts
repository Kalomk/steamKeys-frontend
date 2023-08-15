import { extendTheme } from '@chakra-ui/react';
import floatLabel from './floatLabel';
import styles from './styles';
import textStyle from './textStyle';
const theme = extendTheme({
  ...styles,
  ...textStyle,
  components: {
    Form: {
      variants: {
        ...floatLabel,
      },
    },
  },
});

export default theme;
