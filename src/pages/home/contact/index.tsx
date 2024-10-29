import Section from '@/components/section';
import { memo, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { TFullpageAPI } from '../config';
import './index.less';

const Contact = memo(({ fullPage }: { fullPage: TFullpageAPI }) => {
  useEffect(() => {}, []);
  return (
    <Section className='Contact'>
      <div className='h-dvh w-full overflow-hidden px-12 pb-24 pt-12 lg:p-20 lg:px-20 lg:pb-40 lg:pt-20'>
        <div className='relative flex h-full min-h-[370px] w-full flex-col items-center justify-center space-y-6 border-4 border-primary lg:min-h-[760px] lg:space-y-10'>
          <div className='absolute left-1/2 top-0 -ml-16 -mt-6 flex h-12 w-32 items-center justify-center bg-primary text-white'>
            Contact us
          </div>
          <div className='mt-0 flex w-full justify-center'>
            <div className='cat' />
          </div>
          <div className='flex w-full justify-center'>
            <div className='txt' />
          </div>
          <div className='flex w-full flex-col items-center justify-center space-y-4'>
            <button
              onClick={() => {
                window.open('tel:0987522884', '_self');
              }}
            >
              <div className='n0' />
            </button>
            <button
              onClick={() => {
                window.open('tel:0923835955', '_self');
              }}
            >
              <div className='n1' />
            </button>
          </div>
          <div className='flex w-full justify-center'>
            <div className='txt1' />
          </div>
        </div>
      </div>
      <div className='absolute bottom-[-1px] left-0 flex w-full justify-center bg-primary py-5'>
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
    </Section>
  );
});
export default Contact;
