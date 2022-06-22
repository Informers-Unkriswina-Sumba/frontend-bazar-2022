import { KeranjangActionTypes } from './KeranjangActionTypes';

export interface IKeranjangState {
  keranjang: any[];
  loading: boolean;
  error: any;
}

const keranjangState = {
  keranjang: [],
  loading: false,
  error: undefined,
};

export const keranjangReducer = (
  state = keranjangState,
  action: KeranjangActionTypes
): IKeranjangState => {
  switch (action.type) {
    case 'REQUEST_GET_KERANJANG': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'GET_KERANJANG_SUCCESS': {
      return {
        ...state,
        loading: false,
        keranjang: action.keranjang,
      };
    }
    case 'GET_KERANJANG_FAIL': {
      return {
        ...state,
        loading: false,
        keranjang: [],
        error: action.error,
      };
    }
    default:
      return state;
  }
};
