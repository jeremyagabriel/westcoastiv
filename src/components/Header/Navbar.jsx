/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React, { Fragment } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { VscMenu } from 'react-icons/vsc';

import { Flex, FlexCol } from '../Components';
import { BookNowButton } from '../BookNowButton';

import LogoLight from '../../assets/westcoastiv_logo_light.png';
import LogoDark from '../../assets/westcoastiv_logo_dark.png';

const navbarLinks = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Services',
    to: '#services'
  },
  {
    label: 'About',
    to: '#about'
  },
  {
    label: 'Contact',
    to: '#contact'
  },
];


export const Navbar = ({
  dark = false,
  ...props
}) => {
  const { button } = useStaticQuery(query);

  return (
    <Flex
      data-comp={Navbar.displayName}
      sx={{
        ...navbarSx,
        '.navbar-button': {
          color: dark ? 'B1' : 'white'
        }
      }}
      {...props}
    >
      <Image
        src={dark ? LogoDark : LogoLight}
        sx={{
          height: '70px',
          objectFit: 'contain'
        }}
      />

      <Box
        sx={{
          bg: 'transparent',
          height: '1px',
          flex: 1,
          mx: 4,
          boxShadow: dark ? '0 0.5px 0 #003057' : '0 0.5px 0 white',
          transform: 'translateY(-0.5px)'
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
            <Fragment key={index}>
              <Text
                variant='buttons.navbar'
                className='navbar-button'
                onClick={() => {
                  link.to === '/'
                    ? navigate(link.to)
                    : scrollTo(link.to);
                }}
                sx={{
                  color: dark ? 'B1' : 'white',
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
                      color: dark ? 'B1' : 'white',
                    }}
                  >
                    &middot;
                  </Text>
              }
            </Fragment>
          ))}
        </Flex>
        <BookNowButton
          style={{ ml: 4 }}
          title={button?.title}
          url={button?.url}
        />
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
  right: 0,
  zIndex: 2
};

Navbar.displayName = 'Navbar';

export const query = graphql`
  query NavbarQuery {
    button: contentfulButton(metaHandle: {eq: "navbar-book-now-button"}) {
      title
      url
    }
  }
`;