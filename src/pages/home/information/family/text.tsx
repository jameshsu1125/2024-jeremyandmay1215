import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';

const Text0 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, scale: 2 });

  useEffect(() => {
    if (step === InfoStepType.texts) {
      setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 0 });
    }
  }, [step]);

  return <div className='text-0' style={style} />;
});

const Text1 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, scale: 2 });

  useEffect(() => {
    if (step === InfoStepType.texts) {
      setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 150 });
    }
  }, [step]);

  return <div className='text-1' style={style} />;
});

const Text2 = memo(() => {
  const [, setState] = useContext(InfoContext);
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: 20 });

  useEffect(() => {
    if (step === InfoStepType.texts) {
      setStyle(
        { opacity: 1, y: 0 },
        {
          duration: 1000,
          delay: 300,
          onEnd: () => setState((S) => ({ ...S, step: InfoStepType.date })),
        },
      );
    }
  }, [step]);

  return <div className='text-2' style={style} />;
});

export { Text0, Text1, Text2 };
