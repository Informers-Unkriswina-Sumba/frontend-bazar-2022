import axios from 'axios';
import { BACKEND_URL, GUEST_USER_ID_LOCAL_STORAGE } from 'constant';
import { getLocal } from 'helper/localStorage';
import { checkIsGuestIdExist } from 'helper/user';

export const ApiGetKeranjang = async (idGuest: string) => {
  const response = await axios
    .get(`${BACKEND_URL}/guest/keranjang/find-all/${idGuest}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  if (response) {
    return response;
  } else {
    // return window.location.replace('/500');
  }
};

export const ApiAddProductToKeranjang = async (productId: string) => {
  checkIsGuestIdExist();
  const guestId = getLocal(GUEST_USER_ID_LOCAL_STORAGE);

  const response = await axios
    .post(`${BACKEND_URL}/guest/keranjang/add`, {
      idGuest: guestId,
      productId: productId,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  if (response) {
    return response;
  } else {
    // return window.location.replace('/500');
  }
};

export const ApiDeleteProductFromKeranjang = async (idCart: string) => {
  const response = await axios
    .delete(`${BACKEND_URL}/guest/keranjang/delete/${idCart}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  if (response) {
    return response;
  } else {
    // return window.location.replace('/500');
  }
};
