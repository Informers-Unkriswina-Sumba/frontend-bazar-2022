export interface IFormGenerateInvoice {
  guestId: string;
  dataPembeli: {
    nama: string;
    type: string;
  };
  metodePembelian: string;
  lapak: string;
  produk: {
    id: string;
    qty: number;
  }[];
}

export interface IFormUpdateStatusInvoice {
  inovoiceId: string;
  status: string;
}
