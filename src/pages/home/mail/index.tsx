import Section from '@/components/section';
import { Context } from '@/settings/constant';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { HomeContext, TFullpageAPI } from '../config';
import './index.less';
import { ActionType } from '@/settings/type';
import Container from '@/components/container';

const Top = memo(() => {
  const [context] = useContext(Context);
  const isMusic = context[ActionType.Modal]?.isMusic;

  const [style, setStyle] = useTween({ rotateX: 0 });

  useEffect(() => {
    if (isMusic !== null) {
      setStyle(
        { rotateX: 180 },
        {
          duration: 2000,
          easing: Bezier.inOutQuart,
        },
      );
    }
  }, [isMusic]);

  return (
    <div className='top' style={style}>
      <div className='sticker' />
    </div>
  );
});

const Letter = memo(({ fullPage }: { fullPage: TFullpageAPI }) => {
  const [context, setContext] = useContext(Context);
  const isMusic = context[ActionType.Modal]?.isMusic;
  const [state] = useContext(HomeContext);
  const [style, setStyle] = useTween({ y: window.innerHeight, scale: 1 });

  useEffect(() => {
    if (state.step === 1)
      setStyle(
        { y: 0 },
        {
          duration: 800,
          onEnd: () => {
            setContext({ type: ActionType.Modal, state: { enabled: true } });
          },
        },
      );
  }, [state]);

  useEffect(() => {
    if (isMusic !== null) {
      setStyle(
        { scale: 1.4, y: window.innerHeight * 0.1 },
        {
          delay: 500,
          duration: 2000,
          easing: Bezier.inOutQuart,
          onEnd: () => {
            fullPage?.fullpageApi.moveSectionDown();
            setStyle({ scale: 1 }, { duration: 500, delay: 1000 });
          },
        },
      );
    }
  }, [isMusic]);

  return (
    <div className='mail' style={style}>
      <Top />
    </div>
  );
});

const Mail = memo(({ fullPage }: { fullPage: TFullpageAPI }) => (
  <Section className='Mail'>
    <div className='flex w-full items-center justify-center'>
      <Container>
        <Letter fullPage={fullPage} />
      </Container>
    </div>
  </Section>
));
export default Mail;
