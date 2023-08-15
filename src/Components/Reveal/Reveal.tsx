import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Box } from '@chakra-ui/react';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  withSlide?: boolean;
}

const Reveal = ({ children, withSlide = false, width = 'fit-content' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  //controls
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      withSlide && slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <Box ref={ref} as="div" style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {withSlide && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: '#171a21',
            zIndex: 20,
          }}
        />
      )}
    </Box>
  );
};

export default Reveal;
