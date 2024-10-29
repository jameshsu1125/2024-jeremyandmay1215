import Container from '@/components/container';
import Section from '@/components/section';
import { memo, useContext, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { twMerge } from 'tailwind-merge';
import { InfoContext, InfoState, InfoStepType } from './config';
import Date from './date';
import Family from './family';
import './index.less';

const Scroll = () => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  return (
    <div
      className={twMerge(
        'absolute bottom-0 flex w-full animate-bounce justify-center',
        step === InfoStepType.date ? 'visible' : 'invisible',
      )}
    >
      <SlArrowDown className='h-16 w-16 text-primary' />
    </div>
  );
};

const Information = memo(() => {
  const value = useState(InfoState);

  return (
    <Section className='Information relative min-h-screen'>
      <InfoContext.Provider value={value}>
        <Container>
          <Family />
          <Date />
        </Container>
        <Scroll />
      </InfoContext.Provider>
    </Section>
  );
});
export default Information;
