import React, { useEffect, useState } from 'react';
import { FormLabel } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';
// import Icon from '@chakra-ui/icon';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { createStandaloneToast, Icon } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import {
  ApiCreatePenilaianLapak,
  ApiGetPenilaianLapakByGuestAndLapakId,
} from 'api/penilaianLapak';
import { checkIsGuestIdExist } from 'helper/user';
import { getLocal } from 'helper/localStorage';
import { GUEST_USER_ID_LOCAL_STORAGE, IS_SHUTDOWN_SYSTEM } from 'constant';

const size = 50;
const scale = 5;

const RatingLapak = React.forwardRef((props: any, ref: any) => {
  const [rating, setRating] = useState(0);
  const [loadingCreatePenilaian, setLoadingCreatePenilaian] = useState(false);
  const [penilaian, setPenilaian] = useState<any>();
  const [message, setMessage] = useState('');
  const toast = createStandaloneToast();

  const buttons = [];

  const onClick = (idx: any) => {
    if (!isNaN(idx)) {
      // allow user to click first icon and set rating to zero if rating is already 1
      if (rating === 1 && idx === 1) {
        setRating(0);
      } else {
        setRating(idx);
      }
    }
  };

  const RatingIcon = ({ fill }: any) => {
    return (
      // <Icon
      //   name={icon}
      //   // size={size}
      //   h={`${size}px`}
      //   w={`${size}px`}
      //   color={fillColor}
      //   stroke={strokeColor}
      //   onClick={onClick}
      //   fill={fill ? '100%' : '0'}
      // />
      <AiFillStar size='40' onClick={onClick} fill={fill ? 'gold' : 'unset'} />
    );
  };

  const RatingButton = ({ idx, fill }: any) => {
    return (
      <Box
        as='button'
        aria-label={`Rate ${idx}`}
        height={`${size}px`}
        width={`${size}px`}
        // variant='unstyled'
        mx={1}
        onClick={() => onClick(idx)}
        _focus={{ outline: 0 }}
      >
        <RatingIcon fill={fill} />
      </Box>
    );
  };

  for (let i = 1; i <= scale; i++) {
    buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
  }

  const onChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const handleClickRating = async () => {
    checkIsGuestIdExist();
    const guestId = getLocal(GUEST_USER_ID_LOCAL_STORAGE);
    setLoadingCreatePenilaian(true);
    const res = await ApiCreatePenilaianLapak({
      guestId: guestId,
      lapakId: props.lapakId,
      rating: rating,
      description: message,
    });
    if (res.status === 200) {
      setPenilaian(res.data.data);
      toast.toast({
        status: 'success',
        description: 'Berhasil menilai lapak',
        title: 'Berhasil',
        duration: 5000,
      });
    }
    setLoadingCreatePenilaian(false);
  };

  const checkIsPenilainExist = async () => {
    const res = await ApiGetPenilaianLapakByGuestAndLapakId(props.lapakId);
    if (res.status === 200) {
      setPenilaian(res.data.data);
    }
  };

  useEffect(() => {
    checkIsPenilainExist();
  }, []);

  return (
    <Box mt={8}>
      {penilaian ? (
        <Box>
          <Text fontSize='20px' fontWeight='700'>
            Penilaian
          </Text>
          <Text>Rating: {penilaian.rating} bintang</Text>
          <Text>Pesan: {penilaian.description}</Text>
          <Text>Dibuat pada: {penilaian.createdAt}</Text>
        </Box>
      ) : IS_SHUTDOWN_SYSTEM ? (
        <Box mt={8}>
          <Text fontSize='20px' textAlign='center' fontWeight='700'>
            Penilaian Telah Ditutup.
          </Text>
          <Text fontSize='20px' textAlign='center' fontWeight='700'>
            We are waiting for you next year 😄
          </Text>
        </Box>
      ) : (
        <>
          <input name='rating' type='hidden' value={rating} ref={ref} />
          {buttons}
          <Box width={`${size * 1.5}px`} textAlign='center'>
            <Text fontSize='sm' textTransform='uppercase'>
              Rating
            </Text>
            <Text fontSize='2xl' fontWeight='semibold' lineHeight='1.2em'>
              {rating}
            </Text>
          </Box>
          <FormLabel mt='5'>Tanggapan</FormLabel>
          <Textarea
            value={message}
            onChange={onChangeMessage}
            placeholder='Tanggapanmu'
          />
          <Button
            mt='5'
            bgColor='green.500'
            color='white'
            disabled={rating === 0 || !message || loadingCreatePenilaian}
            onClick={handleClickRating}
            isLoading={loadingCreatePenilaian}
          >
            Kirim
          </Button>
        </>
      )}
    </Box>
  );
});

RatingLapak.displayName = 'RatingLapak';

export default RatingLapak;
