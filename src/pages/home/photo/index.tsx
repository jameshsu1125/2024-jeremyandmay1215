import Container from '@/components/container';
import Section from '@/components/section';
import { memo, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { photos } from './config';
import { useCountdown } from 'lesca-use-countdown';
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
    <div className='flex w-full flex-row justify-center pb-20 [&>*]:w-28'>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl font-black text-primary'>{days}</div>
        <div className='w-full text-xl text-textColor'>日</div>
      </div>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl font-black text-primary'>{hours}</div>
        <div className='w-full text-xl text-textColor'>時</div>
      </div>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl font-black text-primary'>{minutes}</div>
        <div className='w-full text-xl text-textColor'>分</div>
      </div>
      <div className='flex flex-col space-y-0 text-center'>
        <div className='w-full text-5xl font-black text-primary'>{seconds}</div>
        <div className='w-full text-xl text-textColor'>秒</div>
      </div>
    </div>
  );
});

const Photo = memo(() => {
  return (
    <Section className='Photo'>
      <Container>
        <div className='flex w-full flex-col items-center justify-start space-y-10'>
          <div className='flex w-full justify-center pt-20'>
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
          <div className='flex w-full justify-center'>
            <div className='countdown' />
            <div className='countdown2' />
          </div>
          <CountDown />
        </div>
      </Container>
    </Section>
  );
});
export default Photo;
