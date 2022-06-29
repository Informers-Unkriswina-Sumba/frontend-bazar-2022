import { Box, Heading, Text, Button } from '@chakra-ui/react';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE } from 'constant';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | 404</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box textAlign='center' py={10} px={6}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          bgGradient='linear(to-r, teal.400, teal.600)'
          backgroundClip='text'
        >
          404
        </Heading>
        <Text fontSize='18px' mt={3} mb={2}>
          Halaman Tidak Ditemukan
        </Text>
        <Text color={'gray.500'} mb={6}>
          Halaman yang Anda cari sepertinya tidak ada
        </Text>
        <Link href='/'>
          <Button
            colorScheme='teal'
            bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
            color='white'
            variant='solid'
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </LayoutMainApp>
  );
};

export default NotFound;
