/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';

import { Flex } from '../Components';

import Plus from '../../assets/Plus.svg';

export const Heading = ({ text, style }) => {

  return (
    <Flex
      data-comp={Heading.displayName}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        ...style
      }}
    >
      <Image
        src={Plus}
        sx={{ width: '20px' }}
      />
      <Box
        sx={{
          flex: 1,
          height: '0.5px',
          bg: 'S3',
          mx: 4,
        }}
      />
      <Text variant='text.h5Italic'>
        {text}
      </Text>
      <Box
        sx={{
          flex: 1,
          height: '1px',
          bg: 'S3',
          mx: 4,
        }}
      />
      <Image
        src={Plus}
        sx={{ width: '20px' }}
      />
    </Flex>
  )
}

Heading.displayName = 'Heading';