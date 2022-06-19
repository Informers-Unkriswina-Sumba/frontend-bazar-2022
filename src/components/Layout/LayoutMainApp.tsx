import { Box, Container } from '@chakra-ui/layout';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import NavigationUp from '../NavigationUp';
import Header from '../Header';
import BottomNavigation from 'components/BottomNavigation';

interface IProps {
  children: ReactNode;
  cookies?: string;
}

interface IProps {}

const LayoutMainApp: React.FC<IProps> = (props) => {
  return (
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
      <main className='containerMainApp'>
        <Box borderRadius='lg' className='mainApp'>
          {props.children}
        </Box>
      </main>
      {/* <NavigationUp /> */}
      <BottomNavigation />
    </>
  );
};

export default LayoutMainApp;
// export { getServerSideProps } from '.../../../Chakra';
