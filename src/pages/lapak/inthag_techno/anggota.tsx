import { Box } from '@chakra-ui/layout';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import ProdukItem from 'components/ProdukItem';
import { APP_TITLE, LIST_LAPAK_DATA } from 'constant';
import { DATA_ANGGOTA_KELOMPOK_4 } from 'constant/kelompok-4';
import type { NextPage } from 'next';
import AnggotaItem from 'components/AnggotaItem';
import Head from 'next/head';
import Link from 'next/link';

const Kelompok: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>
          {APP_TITLE} | Lapak {LIST_LAPAK_DATA.KELOMPOK_4.namaLapak} | Anggota
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        {DATA_ANGGOTA_KELOMPOK_4.map((anggota, index) => (
          <AnggotaItem
            gambar=''
            namaAnggota={anggota.nama}
            sosialMedia={anggota.sosialMedia}
            nim={anggota.nim}
          />
        ))}
      </Box>
    </LayoutMainApp>
  );
};

export default Kelompok;