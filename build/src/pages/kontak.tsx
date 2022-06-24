import Layout from 'components/Layout';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';

const Kontak: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Kontak
    </Layout>
  );
};

export default Kontak;
