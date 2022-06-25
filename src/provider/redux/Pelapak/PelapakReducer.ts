import { PelapakActionTypes } from './PelapakActionTypes';

export interface IPelapakState {
  pelapak: any;
  loading: boolean;
  error: any;
}

const pelapaktate = {
  pelapak: undefined,
  loading: false,
  error: undefined,
};

export const pelapakReducer = (
  state = pelapaktate,
  action: PelapakActionTypes
): IPelapakState => {
  switch (action.type) {
    case 'SET_PELAPAK': {
      return {
        ...state,
        pelapak: action.pelapak,
      };
    }
    case 'RESET_PELAPAK': {
      return {
        ...state,
        pelapak: undefined,
      };
    }
    default:
      return state;
  }
};
