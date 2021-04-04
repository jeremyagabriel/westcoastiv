/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useState } from 'react';
import { navigate } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { AnimatePresence } from 'framer-motion';
import { FlexCol, Flex, MotionText } from '../Components';

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


export const NavbarServicesHover2 = ({
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
          color: isHovered
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
          // display: isScrolled ? 'none' : 'block'
        }}
      >
        <Flex
          sx={{
            pt: 3,
            position: 'absolute',
            justifyContent: 'space-between',
            left: '-96px',
            width: '250px',
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
                    delay={index * 0.04}
                    triggerOnce={false}
                    variant='buttons.navbar'
                    exit={{
                      opacity: 0,
                      y: -2,
                      transition: {
                        delay: ((services.length - 1) - index) * 0.04,
                        type: "spring",
                        stiffness: 700,
                        damping: 30,
                        duration: 0.1,
                      },
                    }}
                    duration={0.1}
                    key={service.label}
                    onClick={() => {
                      navigate(service.to);
                      setIsHovered(false);
                    }}
                    sx={{
                      fontSize: '16px',
                      cursor: 'pointer',
                      color: dark || isScrolled ? 'B1' : 'white',
                      // mr: index !== services.length - 1 ? 5 : 0,
                      transition: '0.2s',
                      '&:hover': {
                        // color: 'P2'
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {service.label}
                  </MotionText>
                ))
            }
          </AnimatePresence>
        </Flex>
      </Box>
    </FlexCol>
  )
}

NavbarServicesHover2.displayName = 'NavbarServicesHover2';

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