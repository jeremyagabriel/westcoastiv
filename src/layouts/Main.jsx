/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Main = ({ children }) => {
  return (
    <Box
      data-comp={Main.displayName}
      display='flex'
      flexDirection='column'
      height='100vh'
    >
      {/* <Header /> */}

      <Box flex={1}>
        { children }
      </Box>

      {/* <Footer /> */}
    </Box>
  )
}

Main.displayName = 'Layout';