import { useRef } from 'react';
import { useIntro } from '@frontend/providers/intro-provider';
import { SketchPane } from './sketch-pane';
import { Title } from './title/title';
import { useClippingPathAnimation } from '@frontend/hooks/use-clipping-path-animation';
import { motion } from 'framer-motion';

type TitleBackLayerProps = {
  index: number;
};
const TitleBackLayer = ({ index }: TitleBackLayerProps) => {
  const sizeRef = useRef<HTMLDivElement>(null);
  const { sketch1, shrinkBackground, retractBackground, setSwapLayers, step } =
    useIntro();

  const { controls, variants } = useClippingPathAnimation({
    sizeRef,
    shrink: shrinkBackground,
    retract: retractBackground,
  });

  return (
    <div
      ref={sizeRef}
      className='absolute inset-0 overflow-hidden'
      style={{
        zIndex: index,
      }}
    >
      <motion.div
        className='h-full w-full'
        initial='visible'
        animate={controls}
        variants={variants}
        onAnimationComplete={() => {
          if (retractBackground) {
            setSwapLayers((prev) => !prev);
          }
        }}
      >
        <div className='absolute inset-0 bg-transparent' />
        <SketchPane sketchKey={sketch1} />

        {step !== 'closing' && (
          <>
            <Title variant='topBackground' />
            <Title variant='middleBackground' />
            <Title variant='bottomBackground' />
          </>
        )}
      </motion.div>
    </div>
  );
};

export { TitleBackLayer };
