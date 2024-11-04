import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Container = memo(({ children }: IReactProps) => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center overflow-hidden'>
      <div className='h-fit w-full max-w-5xl px-5'>{children}</div>
    </div>
  );
});
export default Container;
