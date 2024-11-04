import { useCountdown } from 'lesca-use-countdown';
import { memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { photos } from './config';
import './index.less';

const Slide = ({ url, index }: { url: string; index: number }) => {
  return (
    <div className='w-full'>
      <div className='w-full px-0 lg:px-20'>
        <div className='w-full'>
          <img src={url} alt={`photo${index}`} className='h-full w-full object-cover' />
        </div>
      </div>
    </div>
  );
};

const CountDown = memo(() => {
  const currentDate = new Date(2024, 11, 15, 17, 30, 0, 0);
  const [date] = useCountdown(currentDate);

  const [days, hours, minutes, seconds] = date;
  return (
    <div className='flex w-full flex-row justify-center font-medium [&>*]:w-28'>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl text-primary'>{days}</div>
        <div className='flex w-full items-center justify-center text-xl text-textColor'>
          <div className='t0' />
        </div>
      </div>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl text-primary'>{hours}</div>
        <div className='flex w-full items-center justify-center text-xl text-textColor'>
          <div className='t1' />
        </div>
      </div>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl text-primary'>{minutes}</div>
        <div className='flex w-full items-center justify-center text-xl text-textColor'>
          <div className='t2' />
        </div>
      </div>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl text-primary'>{seconds}</div>
        <div className='flex w-full items-center justify-center text-xl text-textColor'>
          <div className='t3' />
        </div>
      </div>
    </div>
  );
});

const Photo = memo(() => {
  return (
    <div className='Photo flex w-full flex-col items-center justify-start space-y-10'>
      <div className='flex w-full justify-center'>
        <div className='headline' />
      </div>
      <div className='carousel w-full max-w-[750px] px-5 lg:px-16'>
        <Swiper
          loop
          autoHeight
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          autoplay
          spaceBetween={50}
          slidesPerView={1}
        >
          {photos.map((url, index) => {
            return (
              <SwiperSlide key={`slider${index}`}>
                <Slide url={url} index={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='relative flex w-full justify-center'>
        <div className='countdown' />
        <div className='countdown2' />
      </div>
      <CountDown />
    </div>
  );
});
export default Photo;
