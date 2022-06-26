import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import { ApiLoginPelapak } from 'api/pelapak';
import LayoutMainApp from 'components/Layout/LayoutMainApp';
import { APP_TITLE, PELAPAK_TOKEN_LOCAL_STORAGE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetPelapak } from 'provider/redux/Pelapak/PelapakAction';
import { createStandaloneToast } from '@chakra-ui/toast';
import { duration } from 'moment';
import { useRouter } from 'next/router';
import { setLocal } from 'helper/localStorage';
import { IPelapakState } from 'provider/redux/Pelapak/PelapakReducer';
import { ICombinedState } from 'provider/redux/store';

interface IReduxStateWorkspace {
  pelapak: IPelapakState;
}

const LoginPelapak: NextPage = () => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });
  const [loadingLogin, setLoadingLogin] = useState(false);
  const dispatch = useDispatch();
  const toast = createStandaloneToast();
  const router = useRouter();
  const { pelapak } = useSelector<ICombinedState, IReduxStateWorkspace>(
    (state) => {
      return {
        pelapak: state.pelapak,
      };
    }
  );
  const onChange = (e: any) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    setLoadingLogin(true);
    const res = await ApiLoginPelapak(formLogin);
    if (res.status === 200) {
      dispatch(actionSetPelapak(res.data.data));
      setLocal(PELAPAK_TOKEN_LOCAL_STORAGE, res.data.data.token);
      router.push('/dashboard-lapak');
    } else {
      toast.toast({
        status: 'error',
        title: 'Error login',
        description: res.data.message,
        duration: 9000,
      });
    }
    setLoadingLogin(false);
  };

  useEffect(() => {
    if (pelapak.pelapak) {
      router.push('/dashboard-lapak');
    }
  }, [pelapak.pelapak]);

  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg='gray.50'>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login Lapak</Heading>
          </Stack>
          <Box rounded={'lg'} bg='white' boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input
                  name='email'
                  value={formLogin.email}
                  onChange={onChange}
                  type='email'
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Password</FormLabel>
                <Input
                  name='password'
                  value={formLogin.password}
                  onChange={onChange}
                  type='password'
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  disabled={
                    !formLogin.email || !formLogin.password || loadingLogin
                  }
                  onClick={onSubmit}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </LayoutMainApp>
  );
};

export default LoginPelapak;
