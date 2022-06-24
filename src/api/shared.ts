import axios from 'axios';
import { BACKEND_URL } from 'constant';

export const ApiGetListLapak = async () => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/lapak/list`)
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

export const ApiGetLapakDetailBySlugName = async (slugName: string) => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/lapak/slug-name/${slugName}`)
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

export const ApiGetListProdukByLapak = async (lapakId: string) => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/product/lapak/${lapakId}`)
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

export const ApiGetDetailProdukById = async (productId: string) => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/product/detail/${productId}`)
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

export const ApiGetLapakById = async (id: string) => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/lapak/lapak-id/${id}`)
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
