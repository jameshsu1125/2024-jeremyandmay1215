import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';
import useTween from 'lesca-use-tween';

const Table = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 90 });
    }
  }, [step]);

  return <div className='table' style={style} />;
});

const Stuff1 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 100 });
    }
  }, [step]);

  return <div className='stuff-1' style={style} />;
});

const Stuff2 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 110 });
    }
  }, [step]);

  return <div className='stuff-2' style={style} />;
});

const Stuff3 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -15 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle(
        { opacity: 1, y: 0 },
        {
          duration: 800,
          delay: 120,
        },
      );
    }
  }, [step]);

  return <div className='stuff-3' style={style} />;
});

const Stuff0 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, y: -50 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 130 });
    }
  }, [step]);

  return <div className='stuff-0' style={style} />;
});

const Dumbbel = memo(() => {
  const [, setState] = useContext(InfoContext);
  const [context] = useContext(InfoContext);
  const { step } = context;
  const [style, setStyle] = useTween({ opacity: 0, y: -50 });

  useEffect(() => {
    if (step === InfoStepType.items) {
      setStyle(
        { opacity: 1, y: 0 },
        {
          duration: 800,
          delay: 140,
          onEnd: () => setState((S) => ({ ...S, step: InfoStepType.texts })),
        },
      );
    }
  }, [step]);

  return <div className='dumbbel' style={style} />;
});

export { Table, Stuff0, Stuff1, Stuff2, Stuff3, Dumbbel };
