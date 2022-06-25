import { Dispatch } from 'react';
import { PelapakActionTypes } from './PelapakActionTypes';
import { IPelapakState } from './PelapakReducer';

export const actionSetPelapak = (data: any) => {
  return async (
    dispatch: Dispatch<PelapakActionTypes>,
    getState: () => IPelapakState
  ) => {
    dispatch({
      type: 'SET_PELAPAK',
      pelapak: data,
    });
  };
};

export const actionResetPelapak = () => {
  return async (
    dispatch: Dispatch<PelapakActionTypes>,
    getState: () => IPelapakState
  ) => {
    dispatch({
      type: 'RESET_PELAPAK',
    });
  };
};
