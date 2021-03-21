/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import { Fragment, useState, useEffect, useMemo } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { VscMenu } from 'react-icons/vsc';
import { useSetRecoilState } from 'recoil';

import { Flex, FlexCol } from '../Components';
import { BookNowButton } from '../BookNowButton';
import { navbarAtom, isTopAtom } from '../../lib/atoms';

import LogoLight from '../../assets/westcoastiv_logo_light.png';
import LogoDark from '../../assets/westcoastiv_logo_dark.png';
import MenuLight from '../../assets/menu-white.svg';
import MenuDark from '../../assets/menu-black.svg';

const navbarLinks = [
  {
    label: 'Home',
    to: '#header',
    pageTo: '/'
  },
  {
    label: 'Services',
    to: '#services',
    pageTo: '/#services'
  },
  {
    label: 'About',
    to: '#about',
    pageTo: '/#about'
  },
  {
    label: 'Contact',
    to: '#contact',
  },
];


export const Navbar = ({
  dark = false,
  ...props
}) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const { button } = useStaticQuery(query);
  const setNavbarPos = useSetRecoilState(navbarAtom);
  const setIsTop = useSetRecoilState(isTopAtom);

  useEffect (() => {

    document.addEventListener('scroll', e => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50){
        setIsScrolled(true);
        setNavbarPos(true);
        setIsTop(false);
      } else {
        setIsTop(true);
        setIsScrolled(false);
      }
    });
  }, []);

  const isHome = useMemo(() => {
    const url = window.document.URL;
    return url.endsWith('8000/') ||
      url.endsWith('app/') ||
      url.endsWith('com/');
  }, []);

  return (
    <Flex
      id='navbar'
      sx={{
        width: '100vw',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bg: isScrolled ? 'white' : 'transparent',
        transition: 'all 0.2s ease',
        zIndex: 5,
      }}>
      <Flex
        data-comp={Navbar.displayName}
        sx={{
          ...navbarSx,
          '.navbar-button': {
            color: dark || isScrolled ? 'B1' : 'white',
          transition: 'height 0.2s ease',
          }
        }}
        {...props}
      >
        <Image
          src={dark || isScrolled ? LogoDark : LogoLight}
          sx={{
            height: ['52px', '70px'],
            objectFit: 'contain',
            cursor: 'pointer'
          }}
          onClick={() => {
            isHome
              ? scrollTo('#header')
              : navigate('/');
          }}
        />

        <Box
          sx={{
            display: ['none', null, null, 'block'],
            bg: dark || isScrolled ? '#003057' : 'S2',
            height: '1px',
            flex: 1,
            mx: 14,
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
                    link.to === '#contact' || isHome
                      ? scrollTo(link.to)
                      : navigate(link.pageTo);
                  }}
                  sx={{
                    color: dark ? 'B1' : 'white',
                    mr: index !== navbarLinks.length - 1
                      ? 5
                      : null,
                    ml: index !== 0
                      ? 5
                      : null
                  }}
                >
                  {link.label}
                </Text>
                { index !== navbarLinks.length - 1 &&
                    <Text
                      variant='buttons.navbar'
                      sx={{
                        color: dark || isScrolled ? 'B1' : 'white',
                      }}
                    >
                      &middot;
                    </Text>
                }
              </Fragment>
            ))}
          </Flex>
          <BookNowButton
            style={{ ml: 14 }}
            title={button?.title}
            url={button?.url}
          />
        </Flex>

        <Flex
          sx={{
            display: ['flex', null, null, 'none']
          }}
        >
          <BookNowButton
            style={{
              mr: -8,
              transform: 'scale(0.65)',
            }}
            title={button?.title}
            url={button?.url}
          />
          <Image
            src={dark || isScrolled ? MenuDark : MenuLight}
            sx={{
              width: '26px',
              cursor: 'pointer',
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

const navbarSx = {
  flexDirection: ['row'],
  mx: [8, 14],
  my: 8,
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  zIndex: 2,
  maxWidth: '1093px',
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