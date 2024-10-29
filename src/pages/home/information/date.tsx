import { memo, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { InfoContext, InfoStepType } from './config';
import './date.less';

const Date = memo(() => {
  const [context] = useContext(InfoContext);
  const { step } = context;

  return (
    <div className={twMerge('Date', step === InfoStepType.date ? 'visible' : 'invisible')}>
      <div />
    </div>
  );
});
export default Date;
