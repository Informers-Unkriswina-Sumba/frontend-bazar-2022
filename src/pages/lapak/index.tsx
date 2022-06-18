import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';

const Lapak: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | Lapak</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Lapak
    </LayoutMainApp>
  );
};

export default Lapak;
