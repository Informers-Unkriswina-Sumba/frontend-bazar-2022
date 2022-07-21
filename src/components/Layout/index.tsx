import { Box } from '@chakra-ui/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import Header from '../Header';
import NavigationUpToMainApp from '../NavigationUpToMainApp';

interface IProps {
  children: ReactNode;
  cookies?: string;
}

interface IProps {}

const Layout: React.FC<IProps> = (props) => {
  const router = useRouter();

  return (
    // <Chakra cookies={props.cookies}>
    <>
      <Head>
        {/* Favicon Icon */}
        <link rel='icon' href='/favicon.ico' />

        <meta name='theme-color' content='#1f5f51' />

        <meta property='og:type' content='website' />

        {/* <meta
          name='google-site-verification'
          content='ou8SFQ1GL_Y2KaAsYebqCH7UF3ICgauDWGzXT0Gooio'
        /> */}
      </Head>
      <Header />
      {router.pathname === '/rangkuman-penilaian-mahasiswa' ? (
        <main>
          <Box px='4'>{props.children}</Box>
        </main>
      ) : (
        <main className='containerMainApp'>
          <Box borderRadius='lg' className='mainApp' position='relative'>
            {props.children}
            <NavigationUpToMainApp />
          </Box>
        </main>
      )}
    </>
    // </Chakra>
  );
};

export default Layout;
// export { getServerSideProps } from '.../../../Chakra';
