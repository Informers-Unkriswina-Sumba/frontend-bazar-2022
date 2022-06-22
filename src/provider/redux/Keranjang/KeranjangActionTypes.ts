export type KeranjangActionTypes =
  | {
      type: 'GET_KERANJANG_SUCCESS';
      keranjang: any[];
    }
  | { type: 'REQUEST_GET_KERANJANG' }
  | { type: 'GET_KERANJANG_FAIL'; error: any };
