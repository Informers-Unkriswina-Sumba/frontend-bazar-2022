import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE, GUEST_USER_ID_LOCAL_STORAGE } from 'constant';
import { IFormPembeli, IPembelianProduk } from 'interfaces/keranjang';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { findIndex } from 'lodash';
import { BsPerson } from 'react-icons/bs';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ApiGetDetailProdukById } from 'api/shared';
import { IFormGenerateInvoice } from 'interfaces/invoice';
import { checkIsGuestIdExist } from 'helper/user';
import { getLocal } from 'helper/localStorage';
import { ApiGenerateInvoice, ApiPrintInvoice } from 'api/invoice';

const DUMMY_PRODUCT = [
  {
    name: 'Manggulu',
    harga: 15000,
    isSuspend: false,
    image: '',
    id: '507f1f77bcf86cd799439011',
    jumlahPembelian: 1,
    lapak: '507f1f77bcf86cd799439011',
  },
];

const Beli: NextPage = () => {
  const [listProductId, setListProductId] = useState<any>([]);
  const router = useRouter();
  const [formDataPembeli, setFormDataPembeli] = useState<IFormPembeli>({
    nama: '',
    type: '',
  });
  const [dataPembelianProduk, setDataPembelianProduk] = useState(DUMMY_PRODUCT);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChangeFormDataPembeli = (e: any) => {
    setFormDataPembeli({
      ...formDataPembeli,
      [e.target.name]: e.target.value,
    });
  };

  const handleBayarCOD = async (e: any) => {
    onClose();
    checkIsGuestIdExist();
    const guestLgin = getLocal(GUEST_USER_ID_LOCAL_STORAGE);
    let produkWithQty = dataPembelianProduk.map((product) => {
      return {
        id: product.id,
        qty: product.jumlahPembelian,
      };
    });
    const pesanan: IFormGenerateInvoice = {
      dataPembeli: formDataPembeli,
      metodePembelian: 'COD',
      produk: produkWithQty,
      guestId: guestLgin,
      lapak: dataPembelianProduk[0].lapak,
    };
    const res = await ApiGenerateInvoice(pesanan);
    if (res.status === 200) {
      await ApiPrintInvoice(res.data.data._id);
    }
  };

  const addQty = (productId: string) => {
    const productIndex = findIndex(dataPembelianProduk, ['id', productId]);
    const updatedField = dataPembelianProduk[productIndex];
    updatedField.jumlahPembelian += 1;
    let resultFolder = [
      ...dataPembelianProduk.slice(0, productIndex),
      updatedField,
      ...dataPembelianProduk.slice(
        productIndex + 1,
        dataPembelianProduk.length
      ),
    ];
    setDataPembelianProduk(resultFolder);
  };

  const minQty = (productId: string) => {
    const productIndex = findIndex(dataPembelianProduk, ['id', productId]);
    if (productIndex !== -1) {
      const updatedField = dataPembelianProduk[productIndex];
      if (updatedField.jumlahPembelian !== 1) {
        updatedField.jumlahPembelian -= 1;
      }
      let resultFolder = [
        ...dataPembelianProduk.slice(0, productIndex),
        updatedField,
        ...dataPembelianProduk.slice(
          productIndex + 1,
          dataPembelianProduk.length
        ),
      ];
      setDataPembelianProduk(resultFolder);
    }
  };

  const getTotalBelanja = () => {
    let total = 0;
    for (const product of dataPembelianProduk) {
      total += product.harga * product.jumlahPembelian;
    }

    return (
      <Text fontWeight='800' fontSize='20px'>
        Total Belanja: Rp. {total}
      </Text>
    );
  };

  const getListProduct = async (listProduct: any) => {
    let itemsProduct: any[] = [];
    for (const product of listProduct.split(',')) {
      const productDetail = await ApiGetDetailProdukById(product);
      if (productDetail.status === 200) {
        itemsProduct.push({
          name: productDetail.data.data.nama,
          harga: productDetail.data.data.harga,
          image: productDetail.data.data.gambar[0],
          id: productDetail.data.data._id,
          jumlahPembelian: 1,
          lapak: productDetail.data.data.lapak,
        });
      }
    }
    setDataPembelianProduk(itemsProduct);
  };

  useEffect(() => {
    console.log('router.query', router.query);
    if (router.query.productId) {
      console.log('router.query.productId', router.query.productId);
      setListProductId(router.query.productId);
      getListProduct(router.query.productId);
    }
  }, [router]);

  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box padding='0 15px'>
        Beli List ID Product: {listProductId}
        {dataPembelianProduk.map((product, index) => (
          <Box key={index}>
            <Text>{product.name}</Text>
            <Text>Rp. {product.harga}</Text>
            <Flex>
              <Button onClick={() => minQty(product.id)}>-</Button>
              {product.harga * product.jumlahPembelian}
              <Button onClick={() => addQty(product.id)}>+</Button>
            </Flex>
            <Text>Jumlah Pembelian: {product.jumlahPembelian}</Text>
            <Divider my='3' />
          </Box>
        ))}
        {getTotalBelanja()}
        <Box my='20px'>
          {/* <form> */}
          <Text color='green.600'>Form Data Diri Pembeli</Text>
          <FormControl isRequired>
            <FormLabel>Nama</FormLabel>
            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input
                type='text'
                name='nama'
                placeholder='Nama'
                value={formDataPembeli.nama}
                onChange={onChangeFormDataPembeli}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired mt='4'>
            <FormLabel>Asal Pembeli</FormLabel>
            <Select
              name='type'
              placeholder='Pilih Tipe'
              onChange={onChangeFormDataPembeli}
            >
              <option value='1'>Masyarakat Umum</option>
              <option value='2'>Mahasiswa</option>
              <option value='3'>Civitas Akedemi</option>
            </Select>
          </FormControl>
          <Flex mt='8' gap='10px'>
            <Button
              disabled={!formDataPembeli.nama || !formDataPembeli.type}
              onClick={onOpen}
              type='submit'
            >
              Bayar COD
            </Button>
            <Button disabled={!formDataPembeli.nama || !formDataPembeli.type}>
              Pesan Via Whatsapp
            </Button>
          </Flex>
          {/* </form> */}
        </Box>
      </Box>
      <Modal isOpen={isOpen} size='xs' onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Konfirmasi Pemesanan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Apakah kamu yakin untuk melanjutkan pemesanan ?</ModalBody>
          <ModalFooter>
            <Button variant='ghost' colorScheme='red' mr={3} onClick={onClose}>
              Batal
            </Button>
            <Button colorScheme='green' onClick={handleBayarCOD}>
              Ya, lanjutkan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LayoutMainApp>
  );
};

export default Beli;