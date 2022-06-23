import { Spinner } from '@chakra-ui/spinner';
import { ApiGetListProdukByLapak } from 'api/shared';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import ProdukItem from 'components/ProdukItem';
import { APP_TITLE, LIST_LAPAK_ID } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Kenangan: NextPage = () => {
  const [listProduct, setListProduct] = useState<any[]>([]);
  const [loadingGetListProduct, setLoadingGetListProduct] = useState(false);

  const getListProduct = async () => {
    setLoadingGetListProduct(true);
    const res = await ApiGetListProdukByLapak(LIST_LAPAK_ID.KELOMPOK_4);
    if (res.status === 200) {
      setListProduct(res.data.data);
    }
    setLoadingGetListProduct(false);
  };

  useEffect(() => {
    getListProduct();
  }, []);
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | Lapak Kenangan</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Lapak inthag_techno
      <Link href='/lapak/inthag_techno/profile'>Profile</Link>
      {loadingGetListProduct ? (
        <Spinner />
      ) : (
        listProduct.map((product, index) => (
          <ProdukItem
            image={product.gambar[0]}
            productName={product.nama}
            // numReviews='32'
            harga={product.harga}
            link={`/lapak/inthag_techno/produk/${product._id}`}
            key={index}
            id={product._id}
          />
        ))
      )}
    </LayoutMainApp>
  );
};

export default Kenangan;
