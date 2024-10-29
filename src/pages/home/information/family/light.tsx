import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';
import useTween from 'lesca-use-tween';

const Light = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0 });

  useEffect(() => {
    if (step === InfoStepType.person) {
    }
  }, [step]);

  return <div className='light' style={style} />;
});

export { Light };
