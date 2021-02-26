/** @jsx jsx */
import { jsx, Text, Box, Flex, NavLink } from 'theme-ui';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

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
      <Text
        variant='text.h1'
        sx={{
          color: 'white'
        }}
      >
        West Coast IV
      </Text>

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

const headerSx = {
  display: 'flex',
  flexDirection: ['column', null, null, null, 'row'],
  p: 1,
  bg: 'primary.royalblue',
  color: 'white',
  justifyContent: 'space-between',
};

Header.displayName = 'Header';