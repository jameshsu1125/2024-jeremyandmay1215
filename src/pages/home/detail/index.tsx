import Section from '@/components/section';
import { memo } from 'react';
import './index.less';
import Container from '@/components/container';

const Detail = memo(() => {
  return (
    <Section className='Detail'>
      <Container>
        <div className='w-full px-5 py-20'>
          <div className='text' />
        </div>
      </Container>
    </Section>
  );
});
export default Detail;
