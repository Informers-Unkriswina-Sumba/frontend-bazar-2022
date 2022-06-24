import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';

const Produk: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | Produk</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Produk Detail
    </LayoutMainApp>
  );
};

export default Produk;
