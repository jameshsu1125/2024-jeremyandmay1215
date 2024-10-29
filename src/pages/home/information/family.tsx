import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { InfoContext, InfoStepType } from './config';
import { Cat0, Cat1, Cat2, Cat3 } from './family/cat';
import { Light } from './family/light';
import { Person0, Person1 } from './family/person';
import { BG } from './family/sofa';
import { Dumbbel, Stuff0, Stuff1, Stuff2, Stuff3, Table } from './family/table';
import { Text0, Text1, Text2 } from './family/text';
import {
  Item0,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
} from './family/wallCabinet';

const Family = memo(() => {
  const [, setState] = useContext(InfoContext);
  const [preloader, setPreloader] = useState({ isScroll: false, isLoad: false });
  const [played, setPlayed] = useState(false);
  const ref = useRef<{ enabled: boolean; index: number }>({ enabled: true, index: 0 });

  useEffect(() => {
    const enterframe = () => {
      if (window.pageIndex !== undefined) {
        const now = new Date().getTime();
        const diff = now - window.timestamp;
        if (diff > 800 && ref.current.index !== window.pageIndex) {
          ref.current.index = window.pageIndex;
          if (window.pageIndex >= 1) {
            setPreloader((S) => ({ ...S, isScroll: true }));
          }
        }
      }
      if (ref.current.enabled) requestAnimationFrame(enterframe);
    };
    enterframe();

    return () => {
      ref.current.enabled = false;
    };
  }, []);

  useEffect(() => {
    if (preloader.isLoad && preloader.isScroll) {
      setPlayed(true);
    }
  }, [preloader]);

  useEffect(() => {
    if (played) {
      setState((S) => ({ ...S, step: InfoStepType.person }));
    }
  }, [played]);

  return (
    <OnloadProvider
      onload={() => {
        setPreloader((S) => ({ ...S, isLoad: true }));
      }}
    >
      <div className='family'>
        <BG />
        <Item0 />
        <Item1 />
        <Item2 />

        <Item3 />
        <Item4 />

        <Item5 />
        <Item6 />

        <Item7 />
        <Item8 />

        <Light />

        <Person1 />
        <Person0 />

        <Cat0 />
        <Cat1 />
        <Cat2 />
        <Cat3 />

        <Table />
        <Stuff0 />
        <Stuff1 />
        <Stuff2 />
        <Stuff3 />

        <Dumbbel />

        <Text0 />
        <Text1 />
        <Text2 />
      </div>
    </OnloadProvider>
  );
});
export default Family;
