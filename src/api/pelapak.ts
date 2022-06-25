import axios from 'axios';
import { BACKEND_URL, PELAPAK_TOKEN_LOCAL_STORAGE } from 'constant';
import { getLocal } from 'helper/localStorage';
import { IFormLoginPelapak } from 'interfaces/authPelapak';
import { AxiosWithToken } from './axios';

export const ApiLoginPelapak = async (form: IFormLoginPelapak) => {
  const response = await axios
    .post(`${BACKEND_URL}/pelapak/auth/login`, form)
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

export const ApiCheckLoginPelapak = async () => {
  const token = getLocal(PELAPAK_TOKEN_LOCAL_STORAGE);

  const response = await axios
    .post(`${BACKEND_URL}/pelapak/auth/check-login`, {
      token: token,
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

export const ApiLogoutPelapak = async () => {
  const response = await AxiosWithToken()
    .get(`${BACKEND_URL}/pelapak/auth/logout`)
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

export const ApiGetListInvoice = async (lapakId: string) => {
  const response = await AxiosWithToken()
    .get(`${BACKEND_URL}/pelapak/invoice/list/${lapakId}`)
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

export const ApiUpdateStatusInvoice = async (
  invoiceId: string,
  status: string
) => {
  const response = await AxiosWithToken()
    .post(`${BACKEND_URL}/pelapak/invoice/update-status`, {
      inovoiceId: invoiceId,
      status: status,
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
