/** @jsx jsx */
import { jsx, Text, Box, Flex, Image } from 'theme-ui';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../../assets/westcoastiv_logo_light.png';

const navbarLinks = [
  {
    label: 'Home',
    to: '#'
  },
  {
    label: 'Services',
    to: '#'
  },
  {
    label: 'About',
    to: '#'
  },
  {
    label: 'Contact',
    to: '#'
  },
];


export const Navbar = ({ ...props }) => {
  return (
    <Box
      data-comp={Navbar.displayName}
      sx={{
        ...navbarSx,
        a: {
          color: 'white'
        }
      }}
      {...props}
    >
      <Image
        src={Logo}
        sx={{
          height: '70px',
          objectFit: 'contain'
        }}
      />

      <Flex>
        { navbarLinks.map((link, index) => (
            <Text
              key={index}
              variant='buttons.navbar'
              onClick={() => scrollTo('#')}
              sx={{
                color: 'white',
              }}
            >
              {link.label}
            </Text>
        ))}
      </Flex>
    </Box>
  )
}

const navbarSx = {
  display: 'flex',
  flexDirection: ['column', null, null, null, 'row'],
  px: 4,
  py: 2,
  color: 'white',
  justifyContent: 'space-between',
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  right: 0
};

Navbar.displayName = 'Navbar';