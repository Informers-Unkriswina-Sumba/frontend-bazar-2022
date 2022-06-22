import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { createStandaloneToast } from '@chakra-ui/toast';
import { ApiDeleteProductFromKeranjang } from 'api/keranjang';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { actionGetKeranjang } from 'provider/redux/Keranjang/KeranjangAction';
import { IKeranjangState } from 'provider/redux/Keranjang/KeranjangReducer';
import { ICombinedState } from 'provider/redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IReduxStateWorkspace {
  keranjang: IKeranjangState;
}

const Keranjang: NextPage = () => {
  const dispatch = useDispatch();
  const toast = createStandaloneToast();
  const router = useRouter();
  const { keranjang } = useSelector<ICombinedState, IReduxStateWorkspace>(
    (state) => {
      return {
        keranjang: state.keranjang,
      };
    }
  );

  const handleBeli = (id: string) => {
    router.push({
      pathname: '/beli',
      query: {
        productId: [id],
      },
    });
  };

  const handleHapus = async (id: string) => {
    const res = await ApiDeleteProductFromKeranjang(id);
    if (res.status === 200) {
      dispatch(actionGetKeranjang());
    } else {
      toast.toast({
        status: 'error',
        title: 'Gagal',
        description: res.data.message,
        duration: 5000,
        position: 'bottom-left',
      });
    }
  };

  useEffect(() => {
    if (keranjang.keranjang.length === 0) {
      dispatch(actionGetKeranjang());
    }
  }, []);

  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        Keranjang Daftar Keranjang:
        {keranjang.keranjang.map((keranjang, index) => (
          <>
            <Text key={index}>{keranjang.productId}</Text>
            <Button onClick={() => handleHapus(keranjang._id)}>Hapus</Button>
            <Button onClick={() => handleBeli(keranjang._id)}>Beli</Button>
          </>
        ))}
        {keranjang.loading && <Spinner />}
      </Box>
    </LayoutMainApp>
  );
};

export default Keranjang;
