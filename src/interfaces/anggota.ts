export interface IAnggotaKelompok {
  nama: string;
  nim: string;
  sosialMedia: {
    type: string;
    link: string;
  }[];
  nomorhp?: string;
  kelas?: string;
}
