import { Box } from '@chakra-ui/layout';
import {
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ApiGetLapakDetailBySlugName } from 'api/shared';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import RatingLapak from 'components/RatingLapak';
import { APP_TITLE, LIST_LAPAK_DATA } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Profile: NextPage = () => {
  const [loadingGetLapak, setLoadingGetLapak] = useState(false);
  const [lapak, setLapak] = useState<any>();

  const getLapak = async () => {
    setLoadingGetLapak(true);
    const res = await ApiGetLapakDetailBySlugName(
      LIST_LAPAK_DATA.KELOMPOK_4.slugName
    );
    if (res.status === 200) {
      console.log('res.data.data', res.data.data);
      setLapak(res.data.data);
    }
    setLoadingGetLapak(false);
  };

  useEffect(() => {
    getLapak();
  }, []);

  return (
    <LayoutMainApp>
      <Head>
        <title>
          {APP_TITLE} | Lapak {LIST_LAPAK_DATA.KELOMPOK_4.namaLapak} | Profile
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        {loadingGetLapak || !lapak ? (
          <Spinner />
        ) : (
          <Box>
            <Flex>
              <Image
                rounded={'md'}
                alt={lapak.namaLapak}
                src={lapak.logo}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {lapak.namaLapak}
                </Heading>
                <Text color='gray.900' fontWeight={300} fontSize={'2xl'}>
                  {lapak.namaKelompok}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={<StackDivider borderColor='gray.200' />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={'lg'}>{lapak.deskripsi}</Text>
                </VStack>
              </Stack>
            </Stack>
            <Box>
              <Link href={`/lapak/inthag_techno/anggota`}>
                <Button>Lihat Anggota</Button>
              </Link>
              <RatingLapak lapakId={lapak._id} />
            </Box>
          </Box>
        )}
      </Box>
    </LayoutMainApp>
  );
};

export default Profile;