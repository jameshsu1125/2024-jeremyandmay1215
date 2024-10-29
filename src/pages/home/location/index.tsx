import { memo, useEffect } from 'react';
import './index.less';
import Section from '@/components/section';
import Container from '@/components/container';

const Location = memo(() => {
  useEffect(() => {}, []);
  return (
    <Section className='Location'>
      <Container>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='logo' />
          <div className='flex w-full justify-center'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.296081085638!2d121.6198161!3d25.057952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad3ed58cbb4d%3A0xbe22eddf14047689!2z5Y-w5YyX5ryi5L6G5aSn6aOv5bqXIEdSQU5EIEhJTEFJIFRBSVBFSQ!5e0!3m2!1szh-TW!2stw!4v1730177373662!5m2!1szh-TW!2stw'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
          <div className='relative w-full px-5 py-20 lg:px-44'>
            <div className='relative w-full'>
              <div className='transportation' />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
});
export default Location;
