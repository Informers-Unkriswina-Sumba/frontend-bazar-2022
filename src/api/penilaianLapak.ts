import axios from 'axios';
import { BACKEND_URL, GUEST_USER_ID_LOCAL_STORAGE } from 'constant';
import { getLocal } from 'helper/localStorage';
import { checkIsGuestIdExist } from 'helper/user';
import { IFormCreatePenilaianLapak } from 'interfaces/penilaian';

checkIsGuestIdExist();
const guestId = getLocal(GUEST_USER_ID_LOCAL_STORAGE);

export const ApiCreatePenilaianLapak = async (
  penilaian: IFormCreatePenilaianLapak
) => {
  const response = await axios
    .post(`${BACKEND_URL}/shared/penilaian-lapak/create`, penilaian)
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

export const ApiGetPenilaianLapakByGuestAndLapakId = async (
  lapakId: string
) => {
  const response = await axios
    .get(`${BACKEND_URL}/shared/penilaian-lapak/find/${guestId}/${lapakId}`)
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
