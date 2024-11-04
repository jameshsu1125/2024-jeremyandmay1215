import { memo } from 'react';
import './index.less';

const Contact = memo(() => (
  <div className='Contact w-full'>
    <div className='w-full overflow-hidden px-12 pb-24 pt-12 lg:p-20 lg:px-20 lg:pb-40 lg:pt-20'>
      <div className='relative flex h-full min-h-[370px] w-full flex-col items-center justify-center space-y-6 border-4 border-primary py-10 lg:min-h-[760px] lg:space-y-10'>
        <div className='absolute left-1/2 top-0 -ml-16 -mt-6 flex h-12 w-32 items-center justify-center bg-primary text-white'>
          <div className='headline' />
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
  </div>
));
export default Contact;
