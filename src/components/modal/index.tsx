import { Context } from '@/settings/constant';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import './index.less';
import { ActionType } from '@/settings/type';

const ButtonGroup = memo(() => {
  const [, setContext] = useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          setContext({ type: ActionType.Modal, state: { enabled: false, isMusic: true } });
        }}
      >
        是
      </button>
      <button
        onClick={() => {
          setContext({ type: ActionType.Modal, state: { enabled: false, isMusic: false } });
        }}
      >
        否
      </button>
    </div>
  );
});

const Dialog = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, scale: 1.2 });

  useEffect(() => {
    setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 500, easing: Bezier.outBack });
  }, []);

  return (
    <div className='sticker space-y-4' style={style}>
      <h1 className='text-center text-base font-bold'>
        進入網站前，請先選擇
        <br />
        是否想搭配音樂瀏覽喜帖？
      </h1>
      <ButtonGroup />
      <p className='text-xs'>＊之後仍可透過右下角開關音樂唷！</p>
    </div>
  );
});

const Modal = memo(() => (
  <div className='Modal fixed left-0 top-0 h-full w-full'>
    <div className='animate-fade absolute left-0 top-0 h-full w-full bg-black bg-opacity-50' />
    <Dialog />
  </div>
));
export default Modal;
