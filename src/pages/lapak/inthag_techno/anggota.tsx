import LayoutMainApp from 'components/Layout/LayoutMainApp';
import ProdukItem from 'components/ProdukItem';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Kelompok: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | Lapak Kenangan</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      INI YANG DICODING
    </LayoutMainApp>
  );
};

export default Kelompok;
