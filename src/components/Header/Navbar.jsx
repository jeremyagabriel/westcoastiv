/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Flex, FlexCol } from '../Components';
import { BookNowButton } from '../BookNowButton';
import { Menu } from '../Menu';
import { navbarAtom, isTopAtom, menuOpenAtom, formOpenAtom } from '../../lib/atoms';

import MenuLight from '../../assets/menu-white.svg';
import MenuDark from '../../assets/menu-black.svg';
import CloseLight from '../../assets/close-white.svg';
import CloseDark from '../../assets/close-black.svg';

const navbarLinks = [
  {
    label: 'Home',
    to: '#header',
    pageTo: '/'
  },
  {
    label: 'Services',
    to: '#services-anchor',
    pageTo: '/#services-anchor'
  },
  {
    label: 'About',
    to: '#about-anchor',
    pageTo: '/#about-anchor'
  },
  {
    label: 'Contact',
    to: '#contact-anchor',
  },
];


export const Navbar = ({
  dark = false,
  ...props
}) => {

  const [isScrolled, setIsScrolled] = useState(null);
  const { button } = useStaticQuery(query);
  const setNavbarPos = useSetRecoilState(navbarAtom);
  const [isTop, setIsTop] = useRecoilState(isTopAtom);
  const [formOpen, setFormOpen] = useRecoilState(formOpenAtom);
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom);

  const logoDark = '/images/westcoastiv_logo_dark.png';
  const logoLight = '/images/westcoastiv_logo_light.png';

  useEffect (() => {
    const y = window.scrollY;
    if (y < 50) {
      setIsTop(true);
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
      setNavbarPos(true);
      setIsTop(false);
    }

    document.addEventListener('scroll', e => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50){
        setIsScrolled(true);
        setNavbarPos(true);
        setIsTop(false);
      } else {
        setIsScrolled(false);
        setIsTop(true);
      }
    });
  }, []);



  const isHome = useMemo(() => {
    const path = typeof window !== 'undefined'
      ? window.location.pathname
      : ''
    return path === '/' || path === '';
  }, []);

  return (
    isScrolled !== null
      ? <>
          <Flex
            id='navbar'
            sx={{
              width: '100vw',
              justifyContent: 'center',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bg: isScrolled && !menuOpen || formOpen ? 'white' : 'transparent',
              transition: 'all 0.1s ease',
              zIndex: 10,
            }}>
            <Flex
              data-comp={Navbar.displayName}
              sx={{
                ...navbarSx,
                '.navbar-button': {
                  color: dark || isScrolled ? 'B1' : 'white',
                transition: 'all 0.1s ease',
                }
              }}
              {...props}
            >
              <Image
                src={
                  menuOpen && !formOpen
                    ? logoLight
                    : dark || isScrolled || formOpen
                      ? logoDark
                      : logoLight
                }
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
                          link.to === '#contact-anchor' || isHome
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
                { menuOpen
                    ? <Image
                        src={formOpen ? CloseDark : CloseLight}
                        alt='Close icon'
                        sx={{
                          width: '20px',
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          formOpen
                            ? setFormOpen(false)
                            : setMenuOpen(false);
                        }}
                      />
                    : <>
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
                          onClick={() => setMenuOpen(true)}
                        />
                      </>
                }
              </Flex>
            </Flex>
          </Flex>
          { menuOpen &&
            <Menu
              navbarLinks={navbarLinks}
              button={button}
              isHome={isHome}
            />
          }
        </>
      : null
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