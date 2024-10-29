import Sounds from '@/components/sounds';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import ReactFullpage from '@fullpage/react-fullpage';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useState } from 'react';
import { HomeContext, HomeState, HomeStepType, THomeState } from './config';
import Detail from './detail';
import './index.less';
import Information from './information';
import Location from './location';
import Mail from './mail';
import Photo from './photo';
import Contact from './contact';

declare global {
  interface Window {
    pageIndex: number;
    timestamp: number;
  }
}

const Home = memo(() => {
  const [context] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <OnloadProvider
      onload={() => {
        setState((S) => ({ ...S, step: HomeStepType.loaded }));
      }}
    >
      <div className='Home'>
        <HomeContext.Provider value={[state, setState]}>
          <ReactFullpage
            licenseKey={''}
            credits={{ enabled: false }}
            navigation={true}
            onLeave={(_, destination) => {
              window.pageIndex = destination.index;
              window.timestamp = new Date().getTime();
            }}
            scrollingSpeed={800}
            render={(fullPage) => {
              return (
                <ReactFullpage.Wrapper>
                  <Mail fullPage={fullPage} />
                  {context[ActionType.Modal]?.isMusic !== null && (
                    <>
                      <Information />
                      <Detail />
                      <Location />
                      <Photo />
                      <Contact fullPage={fullPage} />
                    </>
                  )}
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </HomeContext.Provider>
        {context[ActionType.Modal]?.isMusic === true && <Sounds />}
      </div>
    </OnloadProvider>
  );
});

export default Home;
