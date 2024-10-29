import { memo, useEffect, useState } from 'react';
import ReactHowler from 'react-howler';

import { GoMute, GoUnmute } from 'react-icons/go';
import useTween, { Bezier } from 'lesca-use-tween';

const Sounds = memo(() => {
  const [mute, setMute] = useState(false);
  const [style, setStyle] = useTween({ y: 70 });
  useEffect(() => {
    setStyle({ y: 0 }, { duration: 500, easing: Bezier.outBack });
  }, []);
  return (
    <div
      style={style}
      className='fixed bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary duration-100 hover:bg-textColor'
    >
      <button onClick={() => setMute((S) => !S)}>
        {mute ? (
          <GoMute className='h-6 w-6 text-white' />
        ) : (
          <GoUnmute className='h-6 w-6 text-white' />
        )}
      </button>
      <ReactHowler src={''} playing={true} loop mute={mute} />
    </div>
  );
});
export default Sounds;
