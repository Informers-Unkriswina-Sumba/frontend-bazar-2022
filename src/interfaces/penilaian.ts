export interface IFormCreatePenilaianAnggota {
  guestId: string;
  nim: string;
  description: string;
}

export interface IFormCreatePenilaianLapak {
  guestId: string;
  lapakId: string;
  rating: number;
  description: string;
}

export interface ISummaryReviewPenilainLapak {
  _id: string;
  rating: number;
  description: string;
  createdAt: string;
}
export interface ISummaryInfoPenilaianLapak {
  info: {
    _id: string;
    namaKelompok: string;
    namaLapak: string;
    deskripsi: string;
    logo: string;
    slugName: string;
  };
  review: ISummaryReviewPenilainLapak[];
}

export interface ISummaryReviewPenilainMahasiswa {
  _id: string;
  nim: string;
  description: string;
  createdAt: string;
}

export interface ISummaryPenilainMahasiswa {
  totalRating: number;
  dataRating: ISummaryReviewPenilainMahasiswa[];
}
