import Reveal from '@/Components/Reveal/Reveal';
import { Box, Image } from '@chakra-ui/react';
const srces = [
  'https://i0.wp.com/cdn.themis-media.com/media/global/images/library/deriv/895/895237.jpg?resize=650%2C795',
  'https://www.oxpal.com/wp-content/uploads/2014/08/far_cry_3_-_cover.jpg',
  'https://images.gog-statics.com/6e6dbbd1637253394627e72c2b99f39d5c89e160ef07ca0d7823ad7603062496_product_card_v2_mobile_slider_639.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVg0JCFzD1T0R93AGYV_h2AiOWAlEJgCkew&usqp=CAU',
  'https://i0.wp.com/i.imgur.com/eOtEAB7.jpg?resize=461%2C650&strip=all',
  'https://nerdiertides.files.wordpress.com/2016/07/watch-dogs-ubisoft-cover-art.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfok98cwImOUqdP38ntLyk7KkSIMkm9F5hw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqX17KOAHV022H5M1uIZqGLaNh32zl13TLQ&usqp=CAU',
];

const ImageGrid = () => {
  return (
    <Box
      padding={4}
      w="100%"
      maxW="900px"
      mx="auto"
      sx={{ columnCount: [1, 2, 3], columnGap: '8px' }}
    >
      {srces.map((src) => (
        <Reveal withSlide={true} key={src}>
          <Image w="100%" borderRadius="xl" mb={2} display="inline-block" src={src} alt="Alt" />
        </Reveal>
      ))}
    </Box>
  );
};

export default ImageGrid;
