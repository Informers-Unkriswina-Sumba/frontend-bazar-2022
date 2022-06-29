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
import { findIndex } from 'lodash';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { actionGetKeranjang } from 'provider/redux/Keranjang/KeranjangAction';
import { IKeranjangState } from 'provider/redux/Keranjang/KeranjangReducer';
import { ICombinedState } from 'provider/redux/store';
import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
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
    const listId = listProductToBuy.map((buy) => buy.productId);
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
      const res = await ApiGetDetailProdukById(id.productId);
      if (res.status === 200) {
        const lapak = await ApiGetLapakById(res.data.data.lapak);
        if (lapak.status === 200) {
          listProduct.push({
            gambar: res.data.data.gambar[0],
            nama: res.data.data.nama,
            harga: res.data.data.harga,
            keranjangId: id._id,
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
    // setListProductToBuy
    if (listProductToBuy.length === 0) {
      let newKeranjang = [
        {
          productId: e.id,
          lapakId: e.lapak.id,
        },
      ];
      setListProductToBuy(newKeranjang);
      return true;
    } else {
      // check if product is exits
      const index = findIndex(listProductToBuy, ['productId', e.id]);
      if (index !== -1) {
        // remove
        let newKeranjang = [
          ...listProductToBuy.slice(0, index),
          ...listProductToBuy.slice(index + 1, listProductToBuy.length),
        ];
        setListProductToBuy(newKeranjang);
        return false;
      } else {
        // check if lapak not same
        const indexbyLapak = findIndex(listProductToBuy, [
          'lapakId',
          e.lapak.id,
        ]);
        if (indexbyLapak === -1 && listProductToBuy.length !== 0) {
          toast.toast({
            status: 'error',
            title: 'Gagal',
            description: 'Kamu tidak bisa checkout dalam lapak yang berbeda',
            duration: 5000,
            position: 'bottom-left',
          });
          return false;
        } else {
          // add
          let newKeranjang = [
            ...listProductToBuy.slice(0, index),
            { productId: e.id, lapakId: e.lapak.id },
            ...listProductToBuy.slice(index + 1, listProductToBuy.length),
          ];
          setListProductToBuy(newKeranjang);
          return true;
        }
      }
    }
  };

  const checkIsKeranjangValid = () => {};

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
      <Box px='15' py='10'>
        <Heading>Keranjang</Heading>
        {loadingGetListProduct ? (
          <Spinner />
        ) : listProduct.length === 0 ? (
          <Box my='6'>
            <Text fontSize='large' fontWeight='800' textAlign='center' mb='4'>
              Keranjang Kamu Kosong
            </Text>
            <Link href='/lapak'>
              <Button
                w='full'
                bgColor='green.300'
                color='white'
                rightIcon={<FaCartPlus size={36} fill='white' />}
              >
                Cusss gas belanja kuyy
              </Button>
            </Link>
          </Box>
        ) : (
          listProduct.map((product, index) => (
            <KeranjangItem
              index={index}
              product={product}
              handleChangeCheckbox={handleChangeCheckbox}
              handleHapus={handleHapus}
              key={index}
              keranjangId={product.keranjangId}
            />
          ))
        )}
        {listProduct.length !== 0 && (
          <Button
            disabled={listProductToBuy.length === 0 ? true : false}
            onClick={handleBeli}
            w='full'
            mt='10'
            bgColor='green.400'
            color='white'
          >
            Beli
          </Button>
        )}
      </Box>
    </LayoutMainApp>
  );
};

export default Keranjang;

interface IPropsKeranjangItem {
  index: number;
  product: any;
  handleChangeCheckbox: (e: any) => boolean;
  handleHapus: (id: string) => Promise<void>;
  keranjangId: string;
}

const KeranjangItem: React.FC<IPropsKeranjangItem> = (props) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    const result = props.handleChangeCheckbox(props.product);
    setChecked(result);
  };

  return (
    <Box mt='10' key={props.index} w='full'>
      <Flex key={props.index} w='full' gap='15px'>
        <Image src={props.product.gambar} w='100px' h='100px' />
        <Box>
          <Text fontSize='16px' fontWeight='700'>
            {props.product.nama}
          </Text>
          <Text>{props.product.lapak.nama}</Text>
          <Box fontSize='2xl' color='gray.800'>
            <Box as='span' color={'gray.600'} fontSize='lg'>
              Rp.
            </Box>
            {props.product.harga}
          </Box>
        </Box>
      </Flex>
      <Box display='flex' justifyContent='flex-end' gap='10px'>
        <Checkbox onChange={onChange} colorScheme='green' isChecked={checked}>
          Beli
        </Checkbox>
        <Button
          bgColor='red.300'
          color='white'
          size='sm'
          mt='4'
          onClick={() => props.handleHapus(props.keranjangId)}
        >
          Hapus
        </Button>
      </Box>
    </Box>
  );
};
