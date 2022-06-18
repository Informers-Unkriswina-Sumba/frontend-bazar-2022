import { IconButton } from '@chakra-ui/button';
import React, { ReactElement, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
interface IProps {}

const NavigationUp: React.FC<IProps> = (): ReactElement => {
  const [isShowButtonScrollTop, setIsShowButtonScrollTop] =
    useState<boolean>(false);

  // When the user scrolls down 20px from the top of the document, show the button
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      scrollFunction();
    };
  }

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsShowButtonScrollTop(true);
    } else {
      setIsShowButtonScrollTop(false);
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (window.location.pathname === '/') return <></>;

  return (
    <footer className='ContainerNavigateUp'>
      {isShowButtonScrollTop && (
        <IconButton
          size='sm'
          fontSize='sm'
          variant='ghost'
          color='current'
          onClick={topFunction}
          icon={<FaArrowAltCircleUp size={36} fill='#d53f8c' />}
          aria-label='Naik ke atas'
          position='absolute'
          bottom='0'
        />
      )}
    </footer>
  );
};

export default NavigationUp;
