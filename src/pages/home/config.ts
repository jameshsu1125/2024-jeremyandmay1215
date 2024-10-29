import { fullpageApi } from '@fullpage/react-fullpage';
import { createContext, Dispatch, SetStateAction } from 'react';

export enum HomeStepType {
  unset = 0,
  loaded = 1,
}
export type TFullpageAPI = { state: any; fullpageApi: fullpageApi } | null;

export type THomeState = { step: HomeStepType; fullPage: TFullpageAPI };
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = { step: HomeStepType.unset, fullPage: null };
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
