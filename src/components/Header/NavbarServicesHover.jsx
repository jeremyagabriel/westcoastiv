/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useState } from 'react';
import { navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { AnimatePresence } from 'framer-motion';
import { FlexCol, MotionText } from '../Components';

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


export const NavbarServicesHover = ({
  link,
  isHome,
  length,
  dark,
  index,
  isScrolled,
  ...props
}) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <FlexCol
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text
        variant='buttons.navbar'
        className='navbar-button'
        onClick={() => {
          isHome
            ? scrollTo(link.to)
            : navigate(link.pageTo);
        }}

        sx={{
          mr: index !== length - 1
            ? 5
            : null,
          ml: index !== 0
            ? 5
            : null,
        }}
        style={{
          transition: '0.2s',
          color: isHovered && !isScrolled
            ? '#10EEBD'
            : dark || isScrolled
              ? '#003057'
              : 'white',
        }}
      >
        {link.label}
      </Text>
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          ml: 5,
          display: isScrolled ? 'none' : 'block'
        }}
      >
        <FlexCol
          sx={{
            pt: 2,
            position: 'absolute',
            width: '110px',
            transition: '0.2s',
          }}
        >
          <AnimatePresence>
            { isHovered &&
                services.map((service, index) => (
                  <MotionText
                    variants='default'
                    animateOnLoad={true}
                    initialY={-2}
                    delay={index * 0.07}
                    triggerOnce={false}
                    variant='buttons.navbar'
                    exit={{
                      opacity: 0,
                      y: -2,
                      transition: {
                        delay: ((services.length - 1) - index) * 0.07,
                        type: "spring",
                        stiffness: 700,
                        damping: 30,
                        duration: 0.2,
                      },
                    }}
                    duration={0.2}
                    key={service.label}
                    onClick={() => {
                      navigate(service.to);
                      setIsHovered(false);
                    }}
                    sx={{
                      fontSize: '18px',
                      cursor: 'pointer',
                      color: dark || isScrolled ? 'B1' : 'white',
                      mb: index !== services.length - 1 ? 2 : 0,
                      transition: '0.2s',
                      '&:hover': {
                        color: 'P2'
                      }
                    }}
                  >
                    {service.label}
                  </MotionText>
                ))
            }
          </AnimatePresence>
        </FlexCol>
      </Box>
    </FlexCol>
  )
}

NavbarServicesHover.displayName = 'NavbarServicesHover';

{/* <MotionText
variants='default'
animateOnLoad={true}
initialY={-2}
delay={index * 0.1}
triggerOnce={false}
variant='buttons.navbar'
exit='hidden'
key={service.label}
onClick={() => {
  navigate(service.to)
}}
sx={{
  fontSize: '18px',
  cursor: 'pointer',
  color: dark || isScrolled ? 'B1' : 'white',
  mb: index !== services.length - 1 ? 2 : 0,
  transition: '0.2s',
  '&:hover': {
    color: 'P2'
  }
}}
>
{service.label}
</MotionText> */}