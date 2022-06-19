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
} from '@chakra-ui/react';
import Link from 'next/link';
import { ReactElement } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

interface IProps {
  image: string;
  productName: string;
  numReviews: string;
  harga: string;
  link: string;
}

const ProdukItem: React.FC<IProps> = (props): ReactElement => {
  return (
    <Link href={props.link}>
      <Flex
        p={50}
        w='full'
        alignItems='center'
        justifyContent='center'
        _hover={{ cursor: 'pointer' }}
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
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent='space-between' alignContent='center'>
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
              <Box display='flex' alignItems='center'>
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {props.numReviews} dilihat
                </Box>
              </Box>
              <Box fontSize='2xl' color='gray.800'>
                <Box as='span' color={'gray.600'} fontSize='lg'>
                  Rp.
                </Box>
                {props.harga}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};

export default ProdukItem;
