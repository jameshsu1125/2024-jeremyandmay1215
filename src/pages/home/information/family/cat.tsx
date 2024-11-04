import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';
import useTween from 'lesca-use-tween';

const Cat0 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, x: -10 });

  useEffect(() => {
    if (step === InfoStepType.sofa) {
      setStyle({ opacity: 1, x: 0 }, { duration: 800, delay: 300 });
    }
  }, [step]);

  return <div className='cat-0' style={style} />;
});

const Cat1 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, x: 10 });

  useEffect(() => {
    if (step === InfoStepType.sofa) {
      setStyle({ opacity: 1, x: 0 }, { duration: 800, delay: 350 });
    }
  }, [step]);

  return <div className='cat-1' style={style} />;
});

const Cat2 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, x: 10 });

  useEffect(() => {
    if (step === InfoStepType.sofa) {
      setStyle({ opacity: 1, x: 0 }, { duration: 800, delay: 400 });
    }
  }, [step]);

  return <div className='cat-2' style={style} />;
});

const Cat3 = memo(() => {
  const [, setState] = useContext(InfoContext);
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, x: -10 });

  useEffect(() => {
    if (step === InfoStepType.sofa) {
      setStyle(
        { opacity: 1, x: 0 },
        {
          duration: 800,
          delay: 450,
          onEnd: () => setState((S) => ({ ...S, step: InfoStepType.items })),
        },
      );
    }
  }, [step]);

  return <div className='cat-3' style={style} />;
});

export { Cat0, Cat1, Cat2, Cat3 };
