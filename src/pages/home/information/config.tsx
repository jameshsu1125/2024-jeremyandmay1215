import { createContext, Dispatch, SetStateAction } from 'react';

export enum InfoStepType {
  unset,
  person,
  sofa,
  items,
  table,
  texts,
  date,
}
export type TInfoState = { step: InfoStepType };
export type TInfoContext = [TInfoState, Dispatch<SetStateAction<TInfoState>>];

export const InfoState: TInfoState = { step: InfoStepType.unset };
export const InfoContext = createContext<TInfoContext>([InfoState, () => {}]);
