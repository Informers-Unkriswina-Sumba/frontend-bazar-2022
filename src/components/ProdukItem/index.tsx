import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  createStandaloneToast,
} from '@chakra-ui/react';
import { ApiAddProductToKeranjang } from 'api/keranjang';
import Link from 'next/link';
import { actionGetKeranjang } from 'provider/redux/Keranjang/KeranjangAction';
import { ReactElement } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

interface IProps {
  image: string;
  productName: string;
  // numReviews: string;
  harga: number;
  link: string;
  id: string;
}

const ProdukItem: React.FC<IProps> = (props): ReactElement => {
  const toast = createStandaloneToast();
  const dispatch = useDispatch();
  const handleAddCart = async () => {
    const res = await ApiAddProductToKeranjang(props.id);
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

  return (
    <Flex
      p={5}
      w='full'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box
        bg='white'
        maxW='sm'
        borderWidth='1px'
        rounded='lg'
        shadow='lg'
        position='relative'
      >
        <Image
          src={props.image}
          alt={`Gambar dari ${props.productName}`}
          roundedTop='lg'
        />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
              Baru
            </Badge>
          </Box>
          <Flex mt='1' justifyContent='space-between' alignContent='center'>
            <Box
              fontSize='2xl'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              // isTruncated
            >
              {props.productName}
            </Box>
            <Tooltip
              label='Tambah ke keranjang'
              bg='white'
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}
            >
              <chakra.span
                _hover={{ cursor: 'pointer' }}
                onClick={handleAddCart}
                display={'flex'}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.span>
            </Tooltip>
          </Flex>

          <Flex justifyContent='space-between' alignContent='center'>
            {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
            {/* <Box display='flex' alignItems='center'>
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {props.numReviews} dilihat
              </Box>
            </Box> */}
            <Box fontSize='2xl' color='gray.800'>
              <Box as='span' color={'gray.600'} fontSize='lg'>
                Rp.
              </Box>
              {props.harga}
            </Box>
          </Flex>
        </Box>
      </Box>
      <Link href={props.link}>
        <Button w='full'>Detail</Button>
      </Link>
    </Flex>
  );
};

export default ProdukItem;
