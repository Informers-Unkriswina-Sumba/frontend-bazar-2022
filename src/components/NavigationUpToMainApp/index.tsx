import { Button, IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { FaCartPlus } from 'react-icons/fa';
interface IProps {}

const NavigationUpToMainApp: React.FC<IProps> = (): ReactElement => {
  const router = useRouter();
  const gotoMainView = () => {
    router.push('/lapak');
  };

  return (
    <Box position='fixed' bottom='20px' right='15px'>
      <Button
        backgroundColor='blue.400'
        onClick={gotoMainView}
        color='white'
        leftIcon={<FaCartPlus size={36} fill='white' />}
      >
        Mulai Belanja
      </Button>
    </Box>
  );
};

export default NavigationUpToMainApp;
