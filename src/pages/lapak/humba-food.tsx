import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';

const Lapak: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | Humba Food</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Lapak Humba Food
    </LayoutMainApp>
  );
};

export default Lapak;
