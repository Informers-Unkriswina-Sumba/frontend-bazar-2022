import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

interface IProps {
  gambar: string;
  namaAnggota: string;
  sosialMedia: any[];
  nim: string;
}

const AnggotaItem: React.FC<IProps> = (props): ReactElement => {
  const [openNilai, setOpenNilai] = useState(false);
  const gotoNewTab = (link: string) => {
    if (window) {
      window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  };

  const handleNilaiSiswa = (type: string) => {
    console.log(type);
    console.log(props.nim);
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

  return (
    <Center py={3}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
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
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {props.namaAnggota}
        </Heading>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {props.sosialMedia.map((sosmed, index) => {
            return renderSosmed(sosmed, index);
          })}
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
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
            onClick={() => setOpenNilai(!openNilai)}
          >
            {openNilai ? 'Tutup beri nilai' : 'Beri nilai'}
          </Button>
        </Stack>
        {openNilai && (
          <Flex alignItems='center' gap='10px'>
            <Box>
              <Button
                onClick={() => handleNilaiSiswa('Sangat Menyenangkan')}
                fontSize='25px'
              >
                🤩
              </Button>
              <Text>Sangat Menyenangkan</Text>
            </Box>
            <Box>
              <Button onClick={() => handleNilaiSiswa('Asik')} fontSize='25px'>
                😃
              </Button>
              <Text>Asik</Text>
            </Box>
            <Box>
              <Button onClick={() => handleNilaiSiswa('Cukup')} fontSize='25px'>
                🙂
              </Button>
              <Text>Cukup</Text>
            </Box>
            <Box>
              <Button
                onClick={() => handleNilaiSiswa('Tidak Menyenangkan')}
                fontSize='25px'
              >
                😭
              </Button>
              <Text>Tidak Menyenangkan</Text>
            </Box>
          </Flex>
        )}
      </Box>
    </Center>
  );
};

export default AnggotaItem;
