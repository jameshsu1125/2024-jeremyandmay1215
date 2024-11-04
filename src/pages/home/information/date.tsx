import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { InfoContext, InfoStepType } from './config';
import './date.less';

const Date = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0 });

  useEffect(() => {
    if (step === InfoStepType.date) {
      setStyle(
        { opacity: 1 },
        {
          duration: 500,
          delay: 0,
          onEnd: () => {
            ref.current?.classList.add('animate-scale');
          },
        },
      );
    }
  }, [step]);

  return (
    <div style={style} className='Date'>
      <div ref={ref} />
    </div>
  );
});
export default Date;
