import { Box } from '@chakra-ui/layout';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Header from '../Header';
import NavigationUpToMainApp from '../NavigationUpToMainApp';

interface IProps {
  children: ReactNode;
  cookies?: string;
}

interface IProps {}

const Layout: React.FC<IProps> = (props) => {
  return (
    // <Chakra cookies={props.cookies}>
    <>
      <Head>
        {/* Favicon Icon */}
        <link rel='icon' href='/favicon.ico' />

        <meta name='theme-color' content='#D53F8C' />

        <meta property='og:type' content='website' />

        {/* <meta
          name='google-site-verification'
          content='ou8SFQ1GL_Y2KaAsYebqCH7UF3ICgauDWGzXT0Gooio'
        /> */}
      </Head>
      <Header />
      <main className='containerMainApp'>
        <Box borderRadius='lg' className='mainApp' position='relative'>
          {props.children}
          <NavigationUpToMainApp />
        </Box>
      </main>
    </>
    // </Chakra>
  );
};

export default Layout;
// export { getServerSideProps } from '.../../../Chakra';
