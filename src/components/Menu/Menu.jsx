/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { FlexCol } from '../Components';
import { BookNowButton } from '../BookNowButton';
import { FormMain } from '../Form';
import { menuOpenAtom, formOpenAtom } from '../../lib/atoms';

const services = [
  {
    label: 'Hydration Therapy',
    to: '/hydration-therapy'
  },
  {
    label: 'Cryotherapy',
    to: '/cryotherapy'
  },
  {
    label: 'Vitamin Injections',
    to: '/vitamin-injections'
  }
];


export const Menu = ({
  navbarLinks,
  button,
  isHome,
 }) => {

  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [formOpen, setFormOpen] = useRecoilState(formOpenAtom);
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom);

  useEffect(() => {
    if (!menuOpen) return;
    const el = document.querySelector('#menu');
    menuOpen && disableBodyScroll(el);
    return () => clearAllBodyScrollLocks();
  }, [menuOpen]);

  const handleClick = (link) => {
    if (link.to === '#services') {
      setServicesExpanded(!servicesExpanded);
    } else if (link.to === '#contact') {
      setFormOpen(true);
    } else if (isHome) {
      scrollTo(link.to);
      setMenuOpen(false);
    } else {
      navigate(link.pageTo);
      setMenuOpen(false);
    }
  };

  return (
    <>
      <FlexCol
        data-comp={Menu.displayName}
        id='menu'
        sx={{
          display: ['flex', null, null, 'none'],
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: '100vh',
          width: '100vw',
          background: 'B1',
          background: 'linear-gradient(12.65deg, #175E95 0.5%, #003057 98.23%)',
          zIndex: 5,
          overflowY: 'scroll',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <FlexCol
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            mt: '20vh',
            pb: '160px'
          }}
        >
          <FlexCol
            sx={{
              alignItems: 'center',
              minHeight: '420px'
            }}
          >
            { navbarLinks.map((link, index) => (
                <Box
                  key={index}
                  sx={{ mb: 15 }}
                >
                  <Text
                    variant='text.h6'
                    sx={{
                      color: link.to === '#services' && servicesExpanded
                        ? 'P2'
                        : 'white',
                      textTransform: 'none',
                      textAlign: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                    onClick={() => handleClick(link)}
                  >
                    {link.label}
                  </Text>
                  { link.to === '#services' && servicesExpanded &&
                      <FlexCol
                        sx={{
                          mt: 8,
                          alignItems: 'center'
                        }}
                      >
                        { services.map((service, index) => (
                            <Text
                              key={index}
                              variant='text.20'
                              sx={{
                                cursor: 'pointer',
                                color: 'white',
                                mb: index !== services.length - 1 ? 10 : 0
                              }}
                              onClick={() => navigate(service.to)}
                            >
                              {service.label}
                            </Text>
                        ))}
                      </FlexCol>
                  }
                </Box>
            ))}
          </FlexCol>
          <BookNowButton
            style={{

            }}
            title={button?.title}
            url={button?.url}
          />
        </FlexCol>
        { formOpen &&
          <FormMain
            mobile={true}
            sx={{ display: ['flex', null, null, 'none'] }}
          />
        }
      </FlexCol>
    </>
  )
}

Menu.displayName = 'Menu';