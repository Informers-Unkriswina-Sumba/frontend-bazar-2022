import axios from 'axios';
import { BACKEND_URL, GUEST_USER_ID_LOCAL_STORAGE } from 'constant';
import { getLocal } from 'helper/localStorage';
import { checkIsGuestIdExist } from 'helper/user';
import { IFormCreatePenilaianAnggota } from 'interfaces/penilaian';

checkIsGuestIdExist();
const guestId = getLocal(GUEST_USER_ID_LOCAL_STORAGE);

export const ApiCreatePenilaianAnggota = async (
  penilaian: IFormCreatePenilaianAnggota
) => {
  const response = await axios
    .post(`${BACKEND_URL}/shared/penilaian-anggota/create`, penilaian)
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

export const ApiGetPenilaianAnggotaByGuestAndNim = async (nim: string) => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/penilaian-anggota/find/${guestId}/${nim}`)
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
