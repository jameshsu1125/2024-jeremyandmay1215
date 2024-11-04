import { TFullpageAPI } from '@/pages/home/config';
import { memo } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const Top = memo(({ fullPage, x }: { fullPage: TFullpageAPI; x: number }) => {
  return (
    <div
      className='bottom-[-1px] left-0 flex w-screen justify-center bg-primary py-5'
      style={{ marginLeft: `-${x}px` }}
    >
      <button
        className='goTop flex flex-row items-center justify-center space-x-2 font-extralight text-white hover:text-textColor'
        onClick={() => {
          fullPage?.fullpageApi.moveTo(1);
        }}
      >
        <span>TOP</span>
        <BiArrowToTop />
      </button>
    </div>
  );
});
export default Top;
