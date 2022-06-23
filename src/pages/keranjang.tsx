import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { createStandaloneToast } from '@chakra-ui/toast';
import { ApiDeleteProductFromKeranjang } from 'api/keranjang';
import { ApiGetDetailProdukById, ApiGetLapakById } from 'api/shared';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { actionGetKeranjang } from 'provider/redux/Keranjang/KeranjangAction';
import { IKeranjangState } from 'provider/redux/Keranjang/KeranjangReducer';
import { ICombinedState } from 'provider/redux/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IReduxStateWorkspace {
  keranjang: IKeranjangState;
}

const Keranjang: NextPage = () => {
  const dispatch = useDispatch();
  const toast = createStandaloneToast();
  const router = useRouter();
  const [listProduct, setListProduct] = useState<any[]>([]);
  const [listProductToBuy, setListProductToBuy] = useState<
    {
      productId: string;
      lapakId: string;
    }[]
  >([]);
  const [loadingGetListProduct, setLoadingGetListProduct] = useState(false);
  const { keranjang } = useSelector<ICombinedState, IReduxStateWorkspace>(
    (state) => {
      return {
        keranjang: state.keranjang,
      };
    }
  );

  const handleBeli = () => {
    const listId = listProductToBuy.map((buy) => buy.lapakId);
    router.push({
      pathname: '/beli',
      query: {
        productId: listId.join(','),
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

  const getListProduct = async () => {
    setLoadingGetListProduct(true);
    let listProduct: any[] = [];
    for (const id of keranjang.keranjang) {
      const res = await ApiGetDetailProdukById(id);
      if (res.status === 200) {
        const lapak = await ApiGetLapakById(res.data.data.lapak);
        if (lapak.status === 200) {
          listProduct.push({
            gambar: res.data.data.gambar[0],
            nama: res.data.data.nama,
            id: res.data.data._id,
            lapak: {
              id: lapak.data.data._id,
              nama: lapak.data.data.namaLapak,
            },
          });
        }
      }
    }
    setListProduct(listProduct);
    setLoadingGetListProduct(false);
  };

  const handleChangeCheckbox = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    if (keranjang.keranjang.length === 0) {
      dispatch(actionGetKeranjang());
    }
  }, []);

  useEffect(() => {
    getListProduct();
  }, [keranjang.keranjang]);

  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <Heading> Keranjang</Heading>
        {loadingGetListProduct ? (
          <Spinner />
        ) : (
          listProduct.map((product, index) => (
            <Box>
              <Flex key={index}>
                <Image src={product.gambar} w='100px' h='100px' />
                <Box>
                  <Text>{product.nama}</Text>
                  <Text>{product.lapak}</Text>
                </Box>
              </Flex>
              <Checkbox
                onChange={() => handleChangeCheckbox(product)}
                colorScheme='green'
              >
                Beli
              </Checkbox>
              <Button mt='4' onClick={() => handleHapus(product.id)}>
                Hapus
              </Button>
            </Box>
          ))
        )}
        <Button
          disabled={listProductToBuy.length === 0 ? true : false}
          onClick={handleBeli}
        >
          Beli
        </Button>
      </Box>
    </LayoutMainApp>
  );
};

export default Keranjang;
