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
export const APP_TITLE = 'enTECHNOpreneurship FAIR 2022';
export const GUEST_USER_ID_LOCAL_STORAGE = 'guest_user_id';
export const PELAPAK_TOKEN_LOCAL_STORAGE = 'pelapak_token';

export const LIST_LAPAK_DATA = {
  KELOMPOK_1: {
    id: '62b53fed27ea5275f8cfb3b9',
    namaLapak: 'Group One Les',
    slugName: 'group_one_les',
  },
  KELOMPOK_2: {
    id: '62b53fed27ea5275f8cfb3af',
    namaLapak: 'TECHMATT',
    slugName: 'techmatt',
  },
  KELOMPOK_3: {
    id: '62b53fed27ea5275f8cfb3b5',
    namaLapak: 'Squad Three Techno',
    slugName: 'squad_three_techno',
  },
  KELOMPOK_4: {
    id: '62b53fed27ea5275f8cfb3b7',
    namaLapak: 'InThAg Techno',
    slugName: 'inthag_techno',
  },
  KELOMPOK_5: {
    id: '62b53fed27ea5275f8cfb3ad',
    namaLapak: 'Simple Food Tecno',
    slugName: 'simple_food_tecno',
  },
  KELOMPOK_6: {
    id: '62b53fed27ea5275f8cfb3b3',
    namaLapak: 'MaGeR',
    slugName: 'mager',
  },
  KELOMPOK_7: {
    id: '62b53fed27ea5275f8cfb3b1',
    namaLapak: 'Smart Food',
    slugName: 'smart_food',
  },
  KELOMPOK_8: {
    id: '62b53fec27ea5275f8cfb3a9',
    namaLapak: 'Sumber Rejeki Tekhno',
    slugName: 'sumber_rejeki_tekhno',
  },
  KELOMPOK_9: {
    id: '62b53fec27ea5275f8cfb3ab',
    namaLapak: 'Tiga Sekawan',
    slugName: 'tiga_sekawan',
  },
  KELOMPOK_10: {
    id: '62b53fea27ea5275f8cfb3a6',
    namaLapak: 'NUKE 10',
    slugName: 'nuke_10',
  },
};
