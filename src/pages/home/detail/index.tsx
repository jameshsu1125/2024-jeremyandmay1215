import Top from '@/components/top';
import { memo, useEffect, useRef, useState } from 'react';
import { TFullpageAPI } from '../config';
import Contact from '../contact';
import Location from '../location';
import Photo from '../photo';
import './index.less';

const Detail = memo(({ fullPage }: { fullPage: TFullpageAPI }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    const resize = () => {
      setX(ref.current?.getClientRects()[0].x || 0);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className='Detail'>
      <div ref={ref} className='w-full py-20'>
        <div className='w-full px-5 py-5'>
          <div className='text' />
        </div>
        <Location />
        <Photo />
      </div>
      <Contact />
      <Top fullPage={fullPage} x={x} />
    </div>
  );
});
export default Detail;
