import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';
import useTween from 'lesca-use-tween';

const Light = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, x: 20 });

  useEffect(() => {
    if (step === InfoStepType.sofa) {
      setStyle({ opacity: 1, x: 0 }, { duration: 500, delay: 100 });
    }
  }, [step]);

  return <div className='light' style={style} />;
});

export { Light };
