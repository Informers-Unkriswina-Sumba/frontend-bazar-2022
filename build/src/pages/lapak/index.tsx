import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { ApiGetListLapak } from 'api/shared';
import LapakItem from 'components/LapakItem';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Lapak: NextPage = () => {
  const [listLapak, setListLapak] = useState<any[]>([]);
  const [loadingGetLapak, setLoadingGetLapak] = useState<boolean>(false);

  const getListLapak = async () => {
    setLoadingGetLapak(true);
    const res = await ApiGetListLapak();
    if (res.status === 200) {
      setListLapak(res.data.data);
    }
    setLoadingGetLapak(false);
  };

  useEffect(() => {
    getListLapak();
  }, []);

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
        {loadingGetLapak ? (
          <Spinner />
        ) : (
          listLapak.map((lapak, index) => (
            <LapakItem
              key={index}
              lapakName={`Lapak ${lapak.namaLapak}`}
              kelompokName={lapak.namaKelompok}
              description={lapak.deskripsi}
              image={`https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`} // lapak.logo
              link={`/lapak/${lapak.slugName}`}
            />
          ))
        )}
      </Flex>
    </LayoutMainApp>
  );
};

export default Lapak;
