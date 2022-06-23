import axios from 'axios';
import { BACKEND_URL } from 'constant';
import {
  IFormGenerateInvoice,
  IFormUpdateStatusInvoice,
} from 'interfaces/invoice';
import fileDownload from 'js-file-download';
import { AxiosWithToken } from './axios';

export const ApiPrintInvoice = async (invoiceId: string) => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/invoice/print/${invoiceId}`, {
      responseType: 'blob',
    })
    .then((response) => {
      fileDownload(
        response.data,
        `${new Date().getTime().toString()}-invoice.pdf`
      );
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

export const ApiGenerateInvoice = async (invoice: IFormGenerateInvoice) => {
  const response = await axios
    .post(`${BACKEND_URL}/guest/invoice/generate`, invoice)
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

export const ApiGetListByLapakId = async (lapakId: string) => {
  const response = await axios
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
  data: IFormUpdateStatusInvoice
) => {
  const response = await AxiosWithToken()
    .post(`${BACKEND_URL}/pelapak/invoice/update-status`, data)
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
