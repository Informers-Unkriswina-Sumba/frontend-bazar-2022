import axios from 'axios';
import { BACKEND_URL } from 'constant';

export const ApiGetSummaryData = async () => {
  const response = await axios
    .get(`${BACKEND_URL}/summary/total-data`)
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

export const ApiGetBestPerformanceLapak = async () => {
  const response = await axios
    .get(`${BACKEND_URL}/summary/best-performance-lapak`)
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

export const ApiGetBestPerformanceMahasiswa = async () => {
  const response = await axios
    .get(`${BACKEND_URL}/summary/best-performance-mahasiswa`)
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
