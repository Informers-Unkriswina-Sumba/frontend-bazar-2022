import React, { useState } from 'react';
import { FormLabel } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';
// import Icon from '@chakra-ui/icon';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { Icon } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

const size = 50;
const icon = 'star';
const scale = 5;
const fillColor = 'gold';
const strokeColor = 'grey';

const RatingLapak = React.forwardRef((props: any, ref: any) => {
  console.log('props', props);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

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

  const handleClickRating = () => {};

  return (
    <Box mt={8}>
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
      <FormLabel>Tanggapan</FormLabel>
      <Textarea
        value={message}
        onChange={onChangeMessage}
        placeholder='Tanggapanmu'
      />
      <Button disabled={rating === 0 || !message} onClick={handleClickRating}>
        Kirim
      </Button>
    </Box>
  );
});

RatingLapak.displayName = 'RatingLapak';

export default RatingLapak;
