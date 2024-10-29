import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Container = memo(({ children }: IReactProps) => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center overflow-hidden'>
      <div className='relative h-fit w-full max-w-5xl'>{children}</div>
    </div>
  );
});
export default Container;
