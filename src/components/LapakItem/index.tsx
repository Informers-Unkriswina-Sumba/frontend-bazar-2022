import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import Link from 'next/link';
import { BsDoorOpenFill } from 'react-icons/bs';

interface IProps {
  kelompokName: string;
  image: string;
  lapakName: string;
  description: string;
  link: string;
}

const LapakItem: React.FC<IProps> = (props): ReactElement => {
  return (
    <Center
      my={6}
      transition='transform .2s'
      _hover={{
        transform: 'scale(1.1)',
      }}
      maxW={{
        base: '320px',
        md: '445px',
      }}
      w={{
        base: '320px',
        md: 'full',
      }}
    >
      <Box
        bg='white'
        boxShadow={'2xl'}
        rounded={'md'}
        p={4}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image src={props.image} layout={'fill'} />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {props.kelompokName}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {props.lapakName}
          </Heading>
          <Text color={'gray.500'}>{props.description}</Text>
        </Stack>

        <Link href={props.link}>
          <Button
            mt='15px'
            w='full'
            backgroundColor='#378474'
            rightIcon={<BsDoorOpenFill />}
            color='white'
            _hover={{}}
            fontSize='14px'
          >
            Kunjungi Lapak
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default LapakItem;
