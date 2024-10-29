import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

const Section = memo(({ children, className = '' }: IReactProps & { className?: string }) => {
  return <div className={twMerge('section', className)}>{children}</div>;
});
export default Section;
