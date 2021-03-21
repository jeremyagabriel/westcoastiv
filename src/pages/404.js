/** @jsx jsx */
import { jsx, Text, Box, Container } from 'theme-ui';
import React, { useMemo } from 'react';
import { Flex, FlexCol, Image } from '../components/Components';
import { Navbar } from '../components/Header';
import { Footer } from '../components/Footer';


const FourZeroFour = () => {

  return (
    <Container
      data-comp={FourZeroFour.displayName}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      <Navbar dark={true} />
      <FlexCol
        sx={{
          flex: 1,
          minHeight: '600px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          variant='text.h5Italic'
          sx={{ mx: 4, fontSize: 5, color: 'P2', mb: 4 }}
        >
          404
        </Text>
        <Text
          variant='text.h5Italic'
          sx={{ mx: 4 }}
        >
          Oops, there's nothing here.
        </Text>
      </FlexCol>
      <Footer />
    </Container>
  )
}

FourZeroFour.displayName = 'FourZeroFour';

export default FourZeroFour;