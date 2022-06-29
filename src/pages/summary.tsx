import Layout from 'components/Layout';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { BsTelephone } from 'react-icons/bs';
import {
  Avatar,
  Box,
  chakra,
  Collapse,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import {
  Badge,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

const Summary: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box px='4' py='6'>
        <Box maxW='7xl' mx={'auto'} pt={5} px={1}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'3xl'}
            py={10}
            fontWeight={'bold'}
          >
            Hasil Rangkuman Kegiatan enTECHNOpreneurship FAIR 2022
          </chakra.h1>
          <SimpleGrid columns={1} spacing={5}>
            <StatsCard
              title={'Lapak'}
              stat={'5,000'}
              icon={<BsPerson size={'3em'} />}
            />
            <StatsCard
              title={'Produk'}
              stat={'1,000'}
              icon={<FiServer size={'3em'} />}
            />
            <StatsCard
              title={'Pelapak'}
              stat={'200'}
              icon={<GoLocation size={'3em'} />}
            />
          </SimpleGrid>
        </Box>
        <Box maxW='7xl' mx={'auto'} pt={5} px={1}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'3xl'}
            py={10}
            fontWeight={'bold'}
          >
            Lapak Best Perfomance
          </chakra.h1>
          <SimpleGrid columns={1} spacing={5}>
            {[1, 2, 3].map((index) => (
              <LapakBestPerformanceItem key={index} />
            ))}
          </SimpleGrid>
        </Box>
        <Box maxW='7xl' mx={'auto'} pt={5} px={1}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'3xl'}
            py={10}
            fontWeight={'bold'}
          >
            Pelapak Best Perfomance
          </chakra.h1>
          <SimpleGrid columns={1} spacing={5}>
            {[1, 2, 3].map((index) => (
              <PelapakBestPerformanceItem key={index} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Summary;

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={2}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={2}>
          <StatLabel fontWeight={'medium'}>{title}</StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

interface ILapakBestPerformanceItem {}

const size = 1;
const scale = 5;
const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

const LapakBestPerformanceItem: React.FC<ILapakBestPerformanceItem> = (
  props
) => {
  const [rating, setRating] = useState(4);
  const { isOpen, onToggle } = useDisclosure();
  const buttons = [];
  const buttonsItem: any = [];

  const onClick = (idx: any) => {
    if (!isNaN(idx)) {
      // allow user to click first icon and set rating to zero if rating is already 1
      if (rating === 1 && idx === 1) {
        setRating(0);
      } else {
        setRating(idx);
      }
    }
  };

  const RatingIcon = ({ fill }: any) => {
    return (
      <AiFillStar size='30' onClick={onClick} fill={fill ? 'gold' : 'unset'} />
    );
  };

  const RatingButton = ({ idx, fill }: any) => {
    return (
      <Box
        as='button'
        aria-label={`Rate ${idx}`}
        height={`${size}px`}
        width={`${size}px`}
        // variant='unstyled'
        onClick={() => onClick(idx)}
        _focus={{ outline: 0 }}
        mx={2}
      >
        <RatingIcon fill={fill} />
      </Box>
    );
  };

  const RatingIconItem = ({ fill }: any) => {
    return (
      <AiFillStar size='20' onClick={onClick} fill={fill ? 'gold' : 'unset'} />
    );
  };

  const RatingButtonItem = ({ idx, fill }: any) => {
    return (
      <Box
        as='button'
        aria-label={`Rate ${idx}`}
        height={`${size}px`}
        width={`${size}px`}
        // variant='unstyled'
        onClick={() => onClick(idx)}
        _focus={{ outline: 0 }}
        mr={5}
      >
        <RatingIconItem fill={fill} />
      </Box>
    );
  };

  for (let i = 1; i <= scale; i++) {
    buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
  }
  for (let i = 1; i <= scale; i++) {
    buttonsItem.push(<RatingButtonItem key={i} idx={i} fill={i <= rating} />);
  }

  return (
    <Box py={6}>
      <Stack
        borderWidth='1px'
        borderRadius='lg'
        w={{ sm: '100%', md: '540px' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg='blue.200'>
          <Image
            objectFit='cover'
            boxSize='100%'
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Lapak Name
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
            Kelompok Lapak
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Deskripsi Lapak
          </Text>
          <Stack
            align={'center'}
            alignItems='center'
            justify={'center'}
            direction={'row'}
            mt={6}
          >
            <Flex gap='5px'>{buttons}</Flex>
            <Text
              textAlign='center'
              fontSize='2xl'
              fontWeight='semibold'
              lineHeight='1.2em'
            >
              104 kali review
            </Text>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Lihat Profile Lapak
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Button onClick={onToggle} w='full' colorScheme='whatsapp'>
        {isOpen ? 'Tutup' : 'Lihat Penilaian'}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <SimpleGrid columns={1} spacing={'10'} padding={2} mt={10} mx={'auto'}>
          {[1, 2, 3].map((index) => (
            <Flex
              key={index}
              boxShadow={'lg'}
              maxW={'640px'}
              direction={{ base: 'column-reverse', md: 'row' }}
              width={'full'}
              rounded={'xl'}
              p={10}
              justifyContent={'space-between'}
              position={'relative'}
              bg={'white'}
              _after={{
                content: '""',
                position: 'absolute',
                height: '21px',
                width: '29px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
                backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
              }}
              _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
                backgroundImage: backgrounds[index % 4],
              }}
            >
              <Flex
                direction={'column'}
                textAlign={'left'}
                justifyContent={'space-between'}
              >
                <chakra.p fontWeight={'medium'} fontSize={'16px'} pb={4}>
                  Review Messages
                </chakra.p>
                <Flex gap='5px'>{buttonsItem}</Flex>
                <chakra.p
                  fontFamily={'Work Sans'}
                  fontWeight={'bold'}
                  fontSize={14}
                  mt={4}
                >
                  Dibuat pada: 23 Juni 2020
                </chakra.p>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Collapse>
    </Box>
  );
};

interface IPelapakBestPerformanceItem {}
const PelapakBestPerformanceItem: React.FC<IPelapakBestPerformanceItem> =
  () => {
    return (
      <Center py={6}>
        <Box
          // maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Image
            h={'120px'}
            w={'full'}
            src={'/images/info.jpeg'}
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Nama Pelapak
              </Heading>
              <Text color={'gray.500'}>Devisi</Text>
              <Text color={'gray.500'}>NIM</Text>
            </Stack>
            <Stack
              direction='column'
              alignItems='center'
              justify={'center'}
              spacing={2}
            >
              <Stack direction='row' spacing={0} align={'center'}>
                <Text fontSize={'md'} color={'gray.500'}>
                  🤩 (Sangat Menyenangkan) :
                </Text>
                <Text fontWeight={600}>100 kali</Text>
              </Stack>
              <Stack direction='row' spacing={0} align={'center'}>
                <Text fontSize={'md'} color={'gray.500'}>
                  😃 (Asik) :
                </Text>
                <Text fontWeight={600}>100 kali</Text>
              </Stack>
              <Stack direction='row' spacing={0} align={'center'}>
                <Text fontSize={'md'} color={'gray.500'}>
                  🙂 (Cukup) :
                </Text>
                <Text fontWeight={600}>100 kali</Text>
              </Stack>
              <Stack direction='row' spacing={0} align={'center'}>
                <Text fontSize={'md'} color={'gray.500'}>
                  😭 (Tidak Menyenangkan) :
                </Text>
                <Text fontWeight={600}>100 kali</Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    );
  };
