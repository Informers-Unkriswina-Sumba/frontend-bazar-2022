import { Box, Heading } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Spinner } from '@chakra-ui/spinner';
import {
  ApiGetLapakDetailBySlugName,
  ApiGetListProdukByLapak,
} from 'api/shared';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import ProdukItem from 'components/ProdukItem';
import ProfileLapakItem from 'components/ProfileLapakItem';
import { APP_TITLE, LIST_LAPAK_DATA } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Kenangan: NextPage = () => {
  const [listProduct, setListProduct] = useState<any[]>([]);
  const [lapak, setLapak] = useState<any>();
  const [loadingGetLapak, setLoadingGetLapak] = useState(false);
  const [loadingGetListProduct, setLoadingGetListProduct] = useState(false);

  const getListProduct = async () => {
    setLoadingGetListProduct(true);
    const res = await ApiGetListProdukByLapak(LIST_LAPAK_DATA.KELOMPOK_2.id);
    if (res.status === 200) {
      setListProduct(res.data.data);
    }
    setLoadingGetListProduct(false);
  };

  const getLapak = async () => {
    setLoadingGetLapak(true);
    const res = await ApiGetLapakDetailBySlugName(
      LIST_LAPAK_DATA.KELOMPOK_2.slugName
    );
    if (res.status === 200) {
      setLapak(res.data.data);
    }
    setLoadingGetLapak(false);
  };

  useEffect(() => {
    getListProduct();
    getLapak();
  }, []);
  return (
    <LayoutMainApp>
      <Head>
        <title>
          {APP_TITLE} | Lapak {LIST_LAPAK_DATA.KELOMPOK_2.namaLapak}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        {loadingGetLapak || !lapak ? (
          <Skeleton height='70px' />
        ) : (
          <ProfileLapakItem
            image={lapak?.logo}
            namaLapak={lapak.namaLapak}
            namaKelompok={lapak.namaKelompok}
            linkProfile={`/lapak/${LIST_LAPAK_DATA.KELOMPOK_2.slugName}/profile`}
          />
        )}
      </Box>
      <Box px='15' mt='10'>
        {loadingGetListProduct ? (
          <Spinner />
        ) : (
          <>
            <Heading>Daftar Produk</Heading>
            {listProduct.map((product, index) => (
              <ProdukItem
                image={product.gambar[0]}
                productName={product.nama}
                harga={product.harga}
                link={`/lapak/inthag_techno/produk/${product._id}`}
                key={index}
                id={product._id}
              />
            ))}
          </>
        )}
      </Box>
    </LayoutMainApp>
  );
};

export default Kenangan;
