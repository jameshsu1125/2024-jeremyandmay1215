import { memo, useContext, useEffect } from 'react';
import { InfoContext, InfoStepType } from '../config';
import useTween from 'lesca-use-tween';

const Person0 = memo(() => {
  const [state, setState] = useContext(InfoContext);
  const { step } = state;

  const [style, setStyle] = useTween({ opacity: 0, x: -30 });

  useEffect(() => {
    if (step === InfoStepType.person) {
      setStyle(
        { opacity: 1, x: 0 },
        {
          duration: 1000,
          delay: 100,
          onEnd: () => {
            setState((S) => ({ ...S, step: InfoStepType.sofa }));
          },
        },
      );
    } else if (step === InfoStepType.unset) {
      setStyle({ opacity: 0, x: -30 }, 1);
    }
  }, [step]);

  return <div className='person-0' style={style} />;
});

const Person1 = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0, x: 30 });

  useEffect(() => {
    if (step === InfoStepType.person) {
      setStyle({ opacity: 1, x: 0 }, { duration: 1000, delay: 0 });
    }
  }, [step]);

  return <div className='person-1' style={style} />;
});

export { Person1, Person0 };
