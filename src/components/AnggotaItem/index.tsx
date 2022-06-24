import {
  Avatar,
  Box,
  Button,
  Center,
  createStandaloneToast,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  ApiCreatePenilaianAnggota,
  ApiGetPenilaianAnggotaByGuestAndNim,
} from 'api/penilaianAnggota';
import { GUEST_USER_ID_LOCAL_STORAGE } from 'constant';
import { getLocal } from 'helper/localStorage';
import { checkIsGuestIdExist } from 'helper/user';
import { ReactElement, useEffect, useState } from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

interface IProps {
  gambar: string;
  namaAnggota: string;
  sosialMedia: any[];
  nim: string;
}

const AnggotaItem: React.FC<IProps> = (props): ReactElement => {
  const [openNilai, setOpenNilai] = useState(false);
  const [penilaian, setPenilaian] = useState<any>();
  const [loadingCreatePenilaian, setLoadingCreatePenilaian] = useState(false);
  const toast = createStandaloneToast();

  const gotoNewTab = (link: string) => {
    if (window) {
      window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  };

  const handleNilaiSiswa = async (type: string) => {
    setLoadingCreatePenilaian(true);
    checkIsGuestIdExist();
    const guestId = getLocal(GUEST_USER_ID_LOCAL_STORAGE);
    const res = await ApiCreatePenilaianAnggota({
      guestId: guestId,
      nim: props.nim,
      description: type,
    });
    if (res.status === 200) {
      toast.toast({
        status: 'success',
        description: 'Berhasil nilai anggota',
        title: 'Berhasil',
        duration: 5000,
      });
      setPenilaian(res.data.data);
    }
    setLoadingCreatePenilaian(false);
  };

  const renderSosmed = (sosmed: any, index: number) => {
    switch (sosmed.type) {
      case 'facebook':
        return (
          <IconButton
            key={index}
            aria-label='facebook'
            variant='ghost'
            size='lg'
            isRound={true}
            _hover={{ bg: '#0D74FF' }}
            icon={<BsFacebook size='28px' />}
            onClick={() => gotoNewTab(sosmed.link)}
          />
        );
      case 'instagram':
        return (
          <IconButton
            key={index}
            aria-label='instagram'
            variant='ghost'
            size='lg'
            isRound={true}
            _hover={{ bg: '#0D74FF' }}
            icon={<BsInstagram size='28px' />}
            onClick={() => gotoNewTab(sosmed.link)}
          />
        );
      case 'twitter':
        return (
          <IconButton
            key={index}
            aria-label='instagram'
            variant='ghost'
            size='lg'
            isRound={true}
            _hover={{ bg: '#0D74FF' }}
            icon={<BsTwitter size='28px' />}
            onClick={() => gotoNewTab(sosmed.link)}
          />
        );
      default:
        return;
    }
  };

  const checkIsPenilainExist = async () => {
    const res = await ApiGetPenilaianAnggotaByGuestAndNim(props.nim);
    if (res.status === 200) {
      setPenilaian(res.data.data);
    }
  };

  useEffect(() => {
    checkIsPenilainExist();
  }, []);

  return (
    <Center py={3}>
      <Box
        maxW={'400px'}
        w={'full'}
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        p={2}
        textAlign={'center'}
      >
        {/* <Avatar
          size={'xl'}
          src={props.gambar}
          // alt={props.namaAnggota}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        /> */}
        <Heading fontSize={'1xl'} fontFamily={'body'}>
          {props.namaAnggota}
        </Heading>

        {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {props.sosialMedia.map((sosmed, index) => {
            return renderSosmed(sosmed, index);
          })}
        </Stack> */}

        <Stack mt={4} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            size='sm'
            my='6'
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
            onClick={() => setOpenNilai(!openNilai)}
          >
            {openNilai ? 'Tutup beri nilai' : 'Beri nilai'}
          </Button>
        </Stack>
        {openNilai && (
          <Flex mt='4' alignItems='center' gap='5px'>
            {loadingCreatePenilaian ? (
              <Spinner />
            ) : penilaian ? (
              <Box>
                <Text>Perasaan: {penilaian.description}</Text>
                <Text>Dibuat pada: {penilaian.createdAt}</Text>
              </Box>
            ) : (
              <>
                <Box>
                  <Button
                    onClick={() => handleNilaiSiswa('Sangat Menyenangkan')}
                    fontSize='20px'
                    padding='0'
                  >
                    🤩
                  </Button>
                  <Text fontSize='12px'>Sangat Menyenangkan</Text>
                </Box>
                <Box>
                  <Button
                    onClick={() => handleNilaiSiswa('Asik')}
                    fontSize='20px'
                    padding='0'
                  >
                    😃
                  </Button>
                  <Text fontSize='12px'>Asik</Text>
                </Box>
                <Box>
                  <Button
                    onClick={() => handleNilaiSiswa('Cukup')}
                    fontSize='20px'
                    padding='0'
                  >
                    🙂
                  </Button>
                  <Text fontSize='12px'>Cukup</Text>
                </Box>
                <Box>
                  <Button
                    onClick={() => handleNilaiSiswa('Tidak Menyenangkan')}
                    fontSize='20px'
                    padding='0'
                  >
                    😭
                  </Button>
                  <Text fontSize='12px'>Tidak Menyenangkan</Text>
                </Box>
              </>
            )}
          </Flex>
        )}
      </Box>
    </Center>
  );
};

export default AnggotaItem;
