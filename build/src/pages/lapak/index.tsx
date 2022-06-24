import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import LapakItem from 'components/LapakItem';
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
      <Flex
        padding='0 10px'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Heading
          fontWeight={600}
          fontSize='4xl'
          lineHeight={'110%'}
          textAlign='center'
          mt='20px'
        >
          Temukan lapak <br />
          <Text textAlign='center' as={'span'} color={'green.400'}>
            disekitarmu
          </Text>
        </Heading>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
          <LapakItem
            key={item}
            lapakName={`Lapak Kenangan ${item}`}
            kelompokName={`Kelompok ${item}`}
            description={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.`}
            image={`https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
            link='/lapak/kenangan'
          />
        ))}
      </Flex>
    </LayoutMainApp>
  );
};

export default Lapak;
