import { Box, Flex, Text } from '@chakra-ui/layout';
import { APP_ROUTE_MAIN } from 'constant';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface IProps {}

const BottomNavigation: React.FC<IProps> = (): ReactElement => {
  const getBgColor = (route: string) => {
    if (typeof window !== 'undefined') {
      if (route === '/lapak' && window.location.pathname === '/lapak') {
        return '#1f5f51';
      }
      if (route === '/keranjang' && window.location.pathname === '/keranjang') {
        return '#1f5f51';
      }
    }

    return 'inital';
  };

  return (
    <Box
      w='full'
      display='flex'
      justifyContent='center'
      height='64px'
      // mb={{
      //   base: 0,
      //   md: '35px',
      // }}
      backgroundColor='#378474'
    >
      <Box
        boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
        w='576px'
        display='flex'
        alignItems='center'
        justifyContent='space-around'
        backgroundColor='#378474'
        color='white'
      >
        {APP_ROUTE_MAIN.map((route, index) => (
          <Link href={route.key} key={index}>
            <Flex
              p='8px'
              h='full'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
              _hover={{
                cursor: 'pointer',
                backgroundColor: '#44A68F',
              }}
              w='100%'
              backgroundColor={getBgColor(route.key)}
            >
              <Box>{route.icon}</Box>
              <Text>{route.label}</Text>
            </Flex>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default BottomNavigation;
