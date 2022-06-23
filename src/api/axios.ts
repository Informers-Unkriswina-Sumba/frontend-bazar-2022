import Axios from 'axios';
import { getLocal } from 'helper/localStorage';
import { PELAPAK_TOKEN_LOCAL_STORAGE } from 'constant';

//ini request axios tapi kita upgrade dengan masang token di header buat otentifikasi user di server
//ditambah fitur auto refresh token kalo misal sudah expired token yang dipakai
//lalu otomatis logout jika token sudah ga valid

export const AxiosWithToken = (options = {}) => {
  const token = getLocal(PELAPAK_TOKEN_LOCAL_STORAGE);
  const config = token
    ? {
        headers: {
          'pelapak-token': token,
        },
      }
    : {};
  const instance = Axios.create(config);

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return instance;
};
