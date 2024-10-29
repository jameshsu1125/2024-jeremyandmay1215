import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';
import useTween from 'lesca-use-tween';

const BG = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0 });

  useEffect(() => {
    if (step === InfoStepType.sofa) {
      setStyle({ opacity: 1 }, { duration: 800, delay: 0 });
    }
  }, [step]);

  return <div className='bg' style={style} />;
});

export { BG };
