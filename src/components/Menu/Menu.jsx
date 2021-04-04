/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { AnimatePresence } from 'framer-motion';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { FlexCol, MotionBox, MotionText } from '../Components';
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
    <MotionBox
      data-comp={Menu.displayName}
      id='menu'
      sx={{
        display: ['flex', null, null, 'none'],
        flexDirection: 'column',
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
        alignItems: 'center',
      }}
    >
      <FlexCol
        sx={{
          alignItems: 'center',
          // justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          mt: '100px',
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
                <MotionText
                  variant='text.h6'
                  variants='default'
                  animateOnLoad={true}
                  delay={index * 0.05}
                  initialY={10}
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
                </MotionText>
                <FlexCol sx={{ alignItems: 'center' }}>
                  <AnimatePresence>
                    { link.to === '#services' && servicesExpanded &&
                        services.map((service, index) => (
                          <MotionText
                            variants='default'
                            animateOnLoad={true}
                            initialY={-10}
                            delay={index * 0.03}
                            key={index}
                            variant='text.20'
                            duration={0.2}
                            exit={{
                              opacity: 0,
                              y: -10,
                              transition: {
                                delay: ((services.length - 1) - index) * 0.03,
                                type: "spring",
                                stiffness: 700,
                                damping: 30,
                                duration: 0.2,
                              },
                            }}
                            sx={{
                              cursor: 'pointer',
                              color: 'white',
                              mb: index !== services.length - 1 ? 10 : 0,
                              mt: index === 0 ? 8 : 0
                            }}
                            onClick={() => {
                              navigate(service.to);
                              setMenuOpen(false);
                            }}
                          >
                            {service.label}
                          </MotionText>
                      ))
                    }
                  </AnimatePresence>
                </FlexCol>
              </Box>
          ))}
        </FlexCol>
        <BookNowButton
          style={{
            mt: 10,
            mb: 16
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
    </MotionBox>
  )
}

Menu.displayName = 'Menu';