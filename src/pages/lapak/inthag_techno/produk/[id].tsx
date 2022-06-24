import {
  Box,
  Button,
  Container,
  createStandaloneToast,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { ApiAddProductToKeranjang } from 'api/keranjang';
import { ApiGetDetailProdukById } from 'api/shared';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE, LIST_LAPAK_DATA } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { actionGetKeranjang } from 'provider/redux/Keranjang/KeranjangAction';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Produk: NextPage = () => {
  const [productId, setProductId] = useState('');
  const [produk, setProduk] = useState<any>();
  const [loadingGetProduk, setLoadingGetProduk] = useState(false);
  const router = useRouter();
  const toast = createStandaloneToast();
  const dispatch = useDispatch();

  const handleClickBeli = () => {
    router.push({
      pathname: '/beli',
      query: {
        productId: [productId],
      },
    });
  };

  const handleAddKeranjang = async () => {
    const res = await ApiAddProductToKeranjang(productId);
    if (res.status === 200) {
      toast.toast({
        status: 'success',
        title: 'Berhasil',
        description: 'Berhasil menambahkan ke keranjang',
        duration: 5000,
        position: 'bottom-right',
      });
      dispatch(actionGetKeranjang());
    } else {
      toast.toast({
        status: 'error',
        title: 'Gagal',
        description: res.data.message,
        duration: 5000,
        position: 'bottom-right',
      });
    }
  };

  const getDetailProduk = async (productId: string) => {
    setLoadingGetProduk(true);
    const res = await ApiGetDetailProdukById(productId);
    if (res.status === 200) {
      setProduk(res.data.data);
    }
    setLoadingGetProduk(false);
  };

  useEffect(() => {
    console.log('router', router.query.id);
    if (router.query.id) {
      // const productId = router.query.id[0] ?? router.query.id;
      // console.log('productId', productId);
      const id: any = router.query.id;
      setProductId(id);
      getDetailProduk(id);
    }
  }, [router.query.id]);

  return (
    <LayoutMainApp>
      <Head>
        <title>
          {APP_TITLE} | Lapak {LIST_LAPAK_DATA.KELOMPOK_4.namaLapak} | Detail
          Produk
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW={'7xl'}>
        {loadingGetProduk || !produk ? (
          <Spinner />
        ) : (
          <SimpleGrid
            columns={{ base: 1, lg: 1 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={produk.gambar[0]}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 4 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {produk.nama}
                </Heading>
                <Text color='gray.400' fontWeight={300} fontSize={'2xl'}>
                  Rp.{produk.harga} {produk.satuan ?? ` / ${produk.satuan}`}
                </Text>
              </Box>
              <Stack
                // spacing={{ base: 2, sm: 2 }}
                direction={'column'}
                divider={<StackDivider borderColor='gray.600' />}
              >
                <Box>
                  <List spacing={2}>
                    {produk.satuan && (
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Satuan:
                        </Text>
                        {produk.satuan}
                      </ListItem>
                    )}
                    {produk.minimalPembelian && (
                      <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                          Minimal Pembelian:
                        </Text>
                        {produk.minimalPembelian}
                      </ListItem>
                    )}
                  </List>
                </Box>
              </Stack>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color='yellow.300'
                fontWeight={'500'}
                textTransform={'uppercase'}
                // mb={'4'}
              >
                Info Produk
              </Text>
              <Box>
                <div dangerouslySetInnerHTML={{ __html: produk.deskripsi }} />
              </Box>
              <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg='green.400'
                color='white'
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}
                onClick={handleClickBeli}
              >
                Beli
              </Button>
              <Button
                rounded={'none'}
                w={'full'}
                size={'lg'}
                bg='blue.400'
                color='white'
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}
                onClick={handleAddKeranjang}
              >
                Tambah Keranjang
              </Button>
            </Stack>
          </SimpleGrid>
        )}
      </Container>
    </LayoutMainApp>
  );
};

export default Produk;
