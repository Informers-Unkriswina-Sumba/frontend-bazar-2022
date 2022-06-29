import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Text } from '@chakra-ui/layout';
import DrawerComponent from 'components/DrawerComponent';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface IProps {}

const Header: React.FC<IProps> = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const handleToogleTheme = (): void => {
    toggleColorMode();
  };

  return (
    <Box
      className='AppHeader'
      // paddingLeft='2'
      // paddingRight='2'
      // paddingTop='4'
      // paddingBottom='4'
      // marginBottom='8'
      backgroundColor='#1f5f51'
    >
      <Flex
        align='center'
        justify='space-between'
        direction='row'
        className='contentAppHeader'
        backgroundColor='#1f5f51'
        color='white'
        padding='15px'
      >
        <Link href='/'>
          <Avatar
            size='md'
            name='Prosper Otemuyiwa'
            src='/images/logo-unkriswina-sumba-512.jpg'
            _hover={{
              cursor: 'pointer',
              backgroundColor: '#44A68F',
            }}
          />
        </Link>
        <Flex direction='column' align='center'>
          <Text fontSize='md' fontWeight='bold'>
            enTECHNOpreneurship FAIR 2022
          </Text>
          <Text fontSize='sm' fontWeight='medium' align='center'>
            By: TIF-AGB-THP
          </Text>
        </Flex>
        <Flex align='center' justify='space-between' direction='row'>
          <DrawerComponent />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
