import { Box, Heading } from '@chakra-ui/layout';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import ProdukItem from 'components/ProdukItem';
import { APP_TITLE, LIST_LAPAK_DATA } from 'constant';
import { DATA_ANGGOTA_KELOMPOK } from 'constant/kelompok-5';
import type { NextPage } from 'next';
import AnggotaItem from 'components/AnggotaItem';
import Head from 'next/head';
import Link from 'next/link';

const Kelompok: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>
          {APP_TITLE} | Lapak {LIST_LAPAK_DATA.KELOMPOK_5.namaLapak} | Anggota
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box px='15' mt='10' mb='20'>
        <Heading fontSize='25px' textAlign='center'>
          Anggota Lapak {LIST_LAPAK_DATA.KELOMPOK_5.namaLapak}
        </Heading>
        {DATA_ANGGOTA_KELOMPOK.map((anggota, index) => (
          <AnggotaItem
            gambar=''
            namaAnggota={anggota.nama}
            sosialMedia={anggota.sosialMedia}
            nim={anggota.nim}
            key={index}
          />
        ))}
      </Box>
    </LayoutMainApp>
  );
};

export default Kelompok;
