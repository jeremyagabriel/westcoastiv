/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { IoChevronDownSharp } from 'react-icons/io5';
import { LazyBackgroundImage } from '../LazyBackgroundImage';
import { Flex, FlexCol, Image } from '../Components';
import { BookNowButton } from '../BookNowButton';
import { navbarAtom } from '../../lib/atoms';

const MotionBox = motion.custom(Box);


export const ServiceHero = ({ content, image }) => {
  // const { scrollY, scrollYProgress } = useViewportScroll();
  // const size = useTransform(scrollYProgress, value => {
  //   return (1.5 - value) < 1.2 ? 1.2 : 1.5 - value;
  // });
  // const y = useTransform(scrollY, value => {
  //   return value > 640 ? 640 : value
  // });
  // const y = useTransform(scrollY, [0, 600], [0, 600]);
  const navbarPos = useRecoilValue(navbarAtom);

  const hero = useMemo(() => ({
    bgImage: content?.backgroundImage?.image?.file?.url,
    image,
    imageAlt: content?.overlayImage?.altText,
    heading: content?.headingContent?.heading,
    superheading: content?.headingContent?.subheading,
    text: content?.textContent?.[0]?.text?.text,
    button: content?.buttonContent
  }), []);

  return (
    <FlexCol
      data-comp={ServiceHero.displayName}
      sx={{
        position: 'relative',
        alignItems: 'center',
        width: '100vw',
        // height: '100vh',
        // minHeight: '600px',
        // maxHeight: '700px',
        height: ['680px', null, null, '500px', null, null, '600px']
      }}
    >
      <Flex
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}
      >
        <LazyBackgroundImage
          src={hero.bgImage}
          sx={{
            display: ['none', null, null, 'block'],
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundPosition: 'right bottom',
            backgroundSize: [null, null, null, '346px', null, null, '416px'],
          }}
        />
        <Flex
          sx={{
            width: '100%',
            maxWidth: '1253px',
            px: [14, null, null, 20],
            mb: ['37px', null, null, null, null, null, '100px'],
            justifyContent: ['center', null, null, 'flex-start']
          }}
        >
          <FlexCol
            sx={{
              width: '100%',
              maxWidth: '315px',
              alignItems: ['center', null, null, 'flex-start'],
            }}
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              sx={{
                display: ['block', null, null, 'none'],
                height: '220px',
                objectFit: 'contain',
                mb: 15
              }}
            />
            <Text
              sx={{
                mb: 5,
                ml: 2,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textAlign: ['center', null, null, 'left']
              }}
            >
              {hero.superheading}
            </Text>
            <Text
              variant='text.h5Italic'
              sx={{
                mb: 10,
                textAlign: ['center', null, null, 'left']
              }}
            >
              {hero.heading}
            </Text>
            <Text
              dangerouslySetInnerHTML={{
                __html: hero.text
              }}
              sx={{
                mb: 13,
                height: '120px',
                textAlign: ['center', null, null, 'left']
              }}
            />
            <BookNowButton
              title={hero.button?.title}
              url={hero.button?.url}
              style={{
                mx: ['auto', null, null, 0]
              }}
            />
          </FlexCol>
        </Flex>
      </Flex>
      {/* <Box
        sx={{
          bg: 'BR1',
          width: '100%',
          flex: 1
        }}
      /> */}
      <FlexCol
        sx={{
          display: ['none', null, 'flex'],
          alignItems: 'center',
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 2,
          transition: '0.3s',
          zIndex: 1,
          opacity: !navbarPos ? 1 : 0
        }}
      >
        <IoChevronDownSharp
          sx={{
            fontSize: '27px',
            color: 'B2',
            mb: '-5px',
          }}
        />
        <Text sx={{ fontSize: '10px' }}>
          Scroll
        </Text>
      </FlexCol>

      <Box
        sx={{
          display: ['none', null, null, 'block'],
          position: 'absolute',
          top: [null, null, null, '140px', null, null, '120px'],
          left: [null, null, null, '45%', '50%'],
          transform: ['none', null, null, 'none', 'translateX(-50%)'],
          height: ['500px', null, null, null, null, null, '600px'],
          width: ['300px', null, null, null, null, null, '350px'],
          zIndex: 2,
        }}
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* <MotionBox
        style={{
          position: 'absolute',
          y,
          scale: size,
          top: '250px',
          height: '470px',
          width: '200px',
          zIndex: 2,
        }}
        sx={{
          display: ['none', null, null, 'block']
        }}
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          sx={{
            objectFit: 'contain',
          }}
        />
      </MotionBox> */}
    </FlexCol>
  )
}

ServiceHero.displayName = 'ServiceHero';