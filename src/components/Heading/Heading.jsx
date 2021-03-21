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
        px: 10,
        ...style
      }}
    >
      <BiPlusMedical
        sx={{
          display: ['none', null, null, 'block'],
          color: '#D1FAF2',
          fontSize: '20px',
        }}
      />
      <Box
        sx={{
          flex: 1,
          height: '1px',
          bg: 'rgba(23, 94, 149, 0.5)',
          mr: [5, null, null, 14],
          ml: [0, null, null, 14],
          maxWidth: ['24px', null, '48px', '100%']
        }}
      />
      <Text variant='text.h5Italic'>
        {text}
      </Text>
      <Box
        sx={{
          flex: 1,
          height: '1px',
          bg: 'rgba(23, 94, 149, 0.5)',
          ml: [5, null, null, 14],
          mr: [0, null, null, 14],
          maxWidth: ['24px', null, '48px', '100%']
        }}
      />
      <BiPlusMedical
        sx={{
          display: ['none', null, null, 'block'],
          color: '#D1FAF2',
          fontSize: '20px',
        }}
      />
    </Flex>
  )
}

Heading.displayName = 'Heading';