import { GUEST_USER_ID_LOCAL_STORAGE } from 'constant';
import { getLocal, setLocal } from './localStorage';

export const checkIsGuestIdExist = () => {
  const userId = getLocal(GUEST_USER_ID_LOCAL_STORAGE);
  if (!userId || userId === 'undefined') {
    const newUserId = new Date().getTime().toString();
    setLocal(GUEST_USER_ID_LOCAL_STORAGE, newUserId);
  }
};
