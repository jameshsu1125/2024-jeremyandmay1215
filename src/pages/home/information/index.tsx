import Container from '@/components/container';
import Section from '@/components/section';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { twMerge } from 'tailwind-merge';
import { TFullpageAPI } from '../config';
import Detail from '../detail';
import { InfoContext, InfoState, InfoStepType } from './config';
import Date from './date';
import Family from './family';
import './index.less';

const Scroll = () => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0 });

  useEffect(() => {
    if (step === InfoStepType.date) {
      setStyle({ opacity: 1 }, { duration: 500, delay: 1000 });
    }
  }, [step]);

  return (
    <div
      style={style}
      className={twMerge(
        'absolute bottom-0 flex w-full flex-col items-center justify-center',
        step === InfoStepType.date ? 'visible' : 'invisible',
      )}
    >
      <SlArrowDown className='h-10 w-14 animate-bounce cursor-pointer text-primary hover:text-textColor' />
    </div>
  );
};

const Information = memo(({ fullPage }: { fullPage: TFullpageAPI }) => {
  const value = useState(InfoState);

  return (
    <Section>
      <InfoContext.Provider value={value}>
        <Container>
          <div className='Information relative flex min-h-dvh w-full flex-col items-center justify-center'>
            <Family />
            <Date />
            <Scroll />
          </div>
          <Detail fullPage={fullPage} />
        </Container>
      </InfoContext.Provider>
    </Section>
  );
});
export default Information;
