import { ApiGetKeranjang } from 'api/keranjang';
import { GUEST_USER_ID_LOCAL_STORAGE } from 'constant';
import { getLocal } from 'helper/localStorage';
import { checkIsGuestIdExist } from 'helper/user';
import { Dispatch } from 'react';
import { KeranjangActionTypes } from './KeranjangActionTypes';
import { IKeranjangState } from './KeranjangReducer';

export const actionGetKeranjang = () => {
  return async (
    dispatch: Dispatch<KeranjangActionTypes>,
    getState: () => IKeranjangState
  ) => {
    dispatch({
      type: 'REQUEST_GET_KERANJANG',
    });
    checkIsGuestIdExist();
    const guestId = getLocal(GUEST_USER_ID_LOCAL_STORAGE);
    const response = await ApiGetKeranjang(guestId);
    if (response.status === 200) {
      dispatch({
        type: 'GET_KERANJANG_SUCCESS',
        keranjang: response.data.data,
      });
    } else {
      dispatch({
        type: 'GET_KERANJANG_FAIL',
        error: response.data.message,
      });
    }
  };
};
