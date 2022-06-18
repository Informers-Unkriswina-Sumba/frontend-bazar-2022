import { Skeleton } from '@chakra-ui/skeleton';
import Layout from 'components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        {/* <meta name='og:keywords' content='Kelas Unkriswina' />
        <meta name='og:title' content='Kelas Unkriswina' />
        <meta property='og:site_name' content='Kelas Unkriswina' />
        <meta
          property='og:description'
          content='Website yang menampilkan seluruh informasi penjadwalan kelas mata kuliah di Unkriswina Sumba Pada tiap Tahun Ajaran'
        />
        <meta name='twitter:title' content='Kelas Unkriswina' />
        <meta
          name='twitter:description'
          content='Website yang menampilkan seluruh informasi penjadwalan kelas mata kuliah di Unkriswina Sumba Pada tiap Tahun Ajaran'
        />
        <meta property='og:url' content={`${PUBLIC_URL}`} />

        <meta name='twitter:site' content={`${PUBLIC_URL}`} />
        <meta property='og:image' content='' />
        <meta name='twitter:image:src' content='' />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='667' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content='Kelas Unkriswina' />

        <title>Kelas Unkriswina</title>
        <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Skeleton height='100px' />
    </Layout>
  );
};

export default Home;
