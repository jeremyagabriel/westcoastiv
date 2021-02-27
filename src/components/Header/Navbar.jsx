/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { VscMenu } from 'react-icons/vsc';

import { Flex, FlexCol } from '../Components';

import Logo from '../../assets/westcoastiv_logo_light.png';

const navbarLinks = [
  {
    label: 'Home',
    to: '#header'
  },
  {
    label: 'Services',
    to: '#header'
  },
  {
    label: 'About',
    to: '#header'
  },
  {
    label: 'Contact',
    to: '#header'
  },
];


export const Navbar = ({ ...props }) => {
  return (
    <Flex
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

      <Box
        sx={{
          bg: 'S3',
          height: '0.5px',
          flex: 1,
          mx: 4
        }}
      />

      <Flex
        sx={{
          display: ['none', null, null, 'flex'],
          alignItems: 'center'
        }}
      >
        <Flex>
          { navbarLinks.map((link, index) => (
            <>
              <Text
                key={index}
                variant='buttons.navbar'
                onClick={() => scrollTo(link.to)}
                sx={{
                  color: 'white',
                  mr: index !== navbarLinks.length - 1
                    ? '10px'
                    : null,
                  ml: index !== 0
                    ? '10px'
                    : null
                }}
              >
                {link.label}
              </Text>
              { index !== navbarLinks.length - 1 &&
                  <Text
                    variant='buttons.navbar'
                    sx={{
                      color: 'white',
                    }}
                  >
                    &middot;
                  </Text>
              }
            </>
          ))}
        </Flex>
        <Text
          variant='buttons.primary'
          sx={{
            ml: 4
          }}
        >
          Book Now
        </Text>
      </Flex>

      <VscMenu
        sx={{
          display: ['block', null, null, 'none'],
          fontSize: '32px',
          color: 'white',
          cursor: 'pointer',
        }}
      />
    </Flex>
  )
}

const navbarSx = {
  flexDirection: ['row'],
  px: 4,
  py: 2,
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  right: 0
};

Navbar.displayName = 'Navbar';