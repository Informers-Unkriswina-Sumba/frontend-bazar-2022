import { FiHome } from 'react-icons/fi';
import { BsCart3, BsInfoSquare } from 'react-icons/bs';
import { IoStorefrontSharp } from 'react-icons/io5';
import { MdOutlineContactSupport } from 'react-icons/md';

export const APP_ROUTE_DRAWER = [
  {
    key: '/kontak',
    label: 'Kontak',
    icon: <BsInfoSquare />,
  },
  {
    key: '/tentang',
    label: 'Tentang Kami',
    icon: <MdOutlineContactSupport />,
  },
  {
    key: '/lapak',
    label: 'Belanja',
    icon: <IoStorefrontSharp />,
  },
  {
    key: '/keranjang',
    label: 'Keranjang',
    icon: <BsCart3 />,
  },
];

export const APP_ROUTE_MAIN = [
  {
    key: '/lapak',
    label: 'Belanja',
    icon: <IoStorefrontSharp />,
  },
  {
    key: '/keranjang',
    label: 'Keranjang',
    icon: <BsCart3 />,
  },
];

export const BACKEND_URL = 'http://localhost:8080/api/v1';
export const APP_TITLE = 'Bazar Unkriswina';
export const GUEST_USER_ID_LOCAL_STORAGE = 'guest_user_id';
export const PELAPAK_TOKEN_LOCAL_STORAGE = 'pelapak_token';

export const LIST_LAPAK_ID = {
  KELOMPOK_1: '62b3df101e45b10f3d433c93',
  KELOMPOK_2: '62b3df101e45b10f3d433c93',
  KELOMPOK_3: '62b3df101e45b10f3d433c93',
  KELOMPOK_4: '62b3df101e45b10f3d433c93',
  KELOMPOK_5: '62b3df101e45b10f3d433c93',
  KELOMPOK_6: '62b3df101e45b10f3d433c93',
  KELOMPOK_7: '62b3df101e45b10f3d433c93',
  KELOMPOK_8: '62b3df101e45b10f3d433c93',
  KELOMPOK_9: '62b3df101e45b10f3d433c93',
  KELOMPOK_10: '62b3df101e45b10f3d433c93',
};
