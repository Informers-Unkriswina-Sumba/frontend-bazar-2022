import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

interface IProps {
  image: string;
  namaLapak: string;
  namaKelompok: string;
  linkProfile: string;
}

const ProfileLapakItem: React.FC<IProps> = (props): ReactElement => {
  const router = useRouter();

  const handleGotoProfileLapak = (link: string) => {
    router.push(link);
  };

  return (
    <Center py={6}>
      <Stack
        borderWidth='1px'
        borderRadius='lg'
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg='white'
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg='blue.200'>
          <Image objectFit='cover' boxSize='100%' src={props.image} />
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
            {props.namaLapak}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
            {props.namaKelompok}
          </Text>
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
              onClick={() => handleGotoProfileLapak(props.linkProfile)}
            >
              Lihat Profile
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProfileLapakItem;
