/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import { BiPlusMedical } from 'react-icons/bi';
import { Flex } from '../Components';


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
      <BiPlusMedical
        sx={{
          color: '#D1FAF2',
          fontSize: '20px',
        }}
      />
      <Box
        sx={{
          flex: 1,
          height: '1px',
          bg: 'transparent',
          mx: 4,
          boxShadow: '0 0.5px 0 rgba(23, 94, 149, 0.5)',
          transform: 'translateY(-0.5px)'
        }}
      />
      <Text variant='text.h5Italic'>
        {text}
      </Text>
      <Box
        sx={{
          flex: 1,
          height: '1px',
          bg: 'transparent',
          mx: 4,
          boxShadow: '0 0.5px 0 rgba(23, 94, 149, 0.5)',
          transform: 'translateY(-0.5px)'
        }}
      />
      <BiPlusMedical
        sx={{
          color: '#D1FAF2',
          fontSize: '20px',
        }}
      />
    </Flex>
  )
}

Heading.displayName = 'Heading';