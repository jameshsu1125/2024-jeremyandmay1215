import Container from '@/components/container';
import Section from '@/components/section';
import { memo, useContext, useEffect, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { twMerge } from 'tailwind-merge';
import { InfoContext, InfoState, InfoStepType } from './config';
import Date from './date';
import Family from './family';
import './index.less';
import useTween from 'lesca-use-tween';
import { TFullpageAPI } from '../config';

const Scroll = ({ fullPage }: { fullPage: TFullpageAPI }) => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  const [style, setStyle] = useTween({ opacity: 0 });

  useEffect(() => {
    if (step === InfoStepType.date) setStyle({ opacity: 1 }, { duration: 500, delay: 1000 });
  }, [step]);

  return (
    <div
      style={style}
      className={twMerge(
        'absolute bottom-0 flex w-full animate-bounce justify-center',
        step === InfoStepType.date ? 'visible' : 'invisible',
      )}
    >
      <SlArrowDown
        onClick={() => {
          fullPage?.fullpageApi.moveTo(3);
        }}
        className='h-16 w-16 cursor-pointer text-primary hover:text-textColor'
      />
    </div>
  );
};

const Information = memo(({ fullPage }: { fullPage: TFullpageAPI }) => {
  const value = useState(InfoState);

  return (
    <Section className='Information relative min-h-screen'>
      <InfoContext.Provider value={value}>
        <Container>
          <Family />
          <Date />
        </Container>
        <Scroll fullPage={fullPage} />
      </InfoContext.Provider>
    </Section>
  );
});
export default Information;
