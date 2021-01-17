/** @jsx jsx */
import { jsx, Text, Box, Flex, NavLink } from 'theme-ui';
import React from 'react';

export const Header = ({ ...props }) => {
  return (
    <Box
      data-comp={Header.displayName}
      sx={{
        ...headerSx,
        a: {
          color: 'white'
        }
      }}
      {...props}
    >
      <Text variant='text.h1' fontWeight='light'>
        West Coast IV
      </Text>

      <Flex>
        <NavLink as='a' variant='buttons.navbar' href='/'>
          Home
        </NavLink>
        <NavLink as='a' variant='buttons.navbar' href='/iv-therapy'>
          Services
        </NavLink>
        <NavLink as='a' variant='buttons.navbar' href='/'>
          Location
        </NavLink>
        <NavLink as='a' variant='buttons.navbar' href='/'>
          Consent Form
        </NavLink>
        <NavLink as='a' variant='buttons.navbar' href='/about'>
          Contact Us
        </NavLink>
      </Flex>
    </Box>
  )
}

const headerSx = {
  display: 'flex',
  flexDirection: ['column', null, null, null, 'row'],
  p: 1,
  bg: 'primary',
  color: 'white',
  justifyContent: 'space-between',
};

Header.displayName = 'Header';