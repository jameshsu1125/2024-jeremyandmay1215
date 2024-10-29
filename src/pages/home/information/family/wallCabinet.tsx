import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';
import useTween from 'lesca-use-tween';

const Item0 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 0 });
    }
  }, [step]);

  return <div className='item-0' style={style} />;
});

const Item1 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 50 });
    }
  }, [step]);

  return <div className='item-1' style={style} />;
});

const Item2 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 150 });
    }
  }, [step]);

  return <div className='item-2' style={style} />;
});

const Item3 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 300 });
    }
  }, [step]);

  return <div className='item-3' style={style} />;
});

const Item4 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 350 });
    }
  }, [step]);

  return <div className='item-4' style={style} />;
});

const Item5 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 500 });
    }
  }, [step]);

  return <div className='item-5' style={style} />;
});

const Item6 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 550 });
    }
  }, [step]);

  return <div className='item-6' style={style} />;
});

const Item7 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 600 });
    }
  }, [step]);

  return <div className='item-7' style={style} />;
});

const Item8 = memo(() => {
  const [, setState] = useContext(InfoContext);
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle(
        { opacity: 1, y: 0 },
        {
          duration: 800,
          delay: 650,
          onEnd: () => setTimeout(() => setState((S) => ({ ...S, step: InfoStepType.table })), 500),
        },
      );
    }
  }, [step]);

  return <div className='item-8' style={style} />;
});

export { Item0, Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8 };