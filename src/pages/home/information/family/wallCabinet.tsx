import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';

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
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 10 });
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
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 20 });
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
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 30 });
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
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 40 });
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
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 50 });
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
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 60 });
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
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 70 });
    }
  }, [step]);

  return <div className='item-7' style={style} />;
});

const Item8 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle(
        { opacity: 1, y: 0 },
        {
          duration: 800,
          delay: 80,
        },
      );
    }
  }, [step]);

  return <div className='item-8' style={style} />;
});

export { Item0, Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8 };
