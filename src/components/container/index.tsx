import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Container = memo(({ children }: IReactProps) => {
  return (
    <div className='flex w-full justify-center'>
      <div className='w-full max-w-7xl'>{children}</div>
    </div>
  );
});
export default Container;
