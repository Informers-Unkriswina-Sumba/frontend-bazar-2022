import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Layout from 'components/Layout';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { BsTelephone } from 'react-icons/bs';

const Kontak: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box px='4' py='6'>
        <Heading>Kontak</Heading>
        <Box mt='6'>
          <Text fontWeight='800' fontSize='20'>
            Informasi Kontak
          </Text>
          <Text>Yetti Kalaway, S.T., M.T., M.m</Text>
          <Flex alignItems='center' gap='4px'>
            <BsTelephone />
            <Text>+62 811-3823-216</Text>
          </Flex>
        </Box>
        <Box mt='2'>
          <Text fontWeight='800' fontSize='20'>
            Ketua Pania Pelaksana
          </Text>
          <Text>Rinto Tunggu Djama</Text>
          <Flex alignItems='center' gap='4px'>
            <BsTelephone />
            <Text>+62 821-4411-4337</Text>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Kontak;
