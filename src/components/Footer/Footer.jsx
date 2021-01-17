/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React from 'react';

export const Footer = ({ ...props }) => {
  return (
    <Box
      data-comp={Footer.displayName}
      {...props}
    >
      <Text>Footer</Text>
    </Box>
  )
}

Footer.displayName = 'Footer';