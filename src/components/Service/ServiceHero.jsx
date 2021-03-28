/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { IoChevronDownSharp } from 'react-icons/io5';
import { LazyBackgroundImage } from '../LazyBackgroundImage';
import { Flex, FlexCol, Image } from '../Components';
import { BookNowButton } from '../BookNowButton';
import { navbarAtom } from '../../lib/atoms';

const MotionBox = motion.custom(Box);


export const ServiceHero = ({ content }) => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const size = useTransform(scrollYProgress, value => {
    return (1.5 - value) < 1.2 ? 1.2 : 1.5 - value;
  });
  // const y = useTransform(scrollY, value => {
  //   return value > 640 ? 640 : value
  // });
  const y = useTransform(scrollY, [0, 600], [0, 600]);
  const navbarPos = useRecoilValue(navbarAtom);

  const hero = useMemo(() => ({
    bgImage: content?.backgroundImage?.image?.file?.url,
    image: content?.overlayImage?.image?.file?.url,
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
        height: '100vh',
        minHeight: '600px',
        maxHeight: '700px',
      }}
    >
      <Flex
        sx={{
          display: 'flex',
          width: '100%',
          height: '500px',
          alignItems: 'flex-end',
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
            backgroundSize: '346px',
          }}
        />
        <FlexCol
          sx={{
            maxWidth: '315px',
            ml: 20
          }}
        >
          <Text
            sx={{
              mb: 5,
              ml: 2,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            {hero.superheading}
          </Text>
          <Text
            variant='text.h5Italic'
            sx={{ mb: 10 }}
          >
            {hero.heading}
          </Text>
          <Text
            dangerouslySetInnerHTML={{
              __html: hero.text
            }}
            sx={{ mb: 13, height: '120px' }}
          />
          <BookNowButton
            title={hero.button?.title}
            url={hero.button?.url}
            style={{
              mb: '37px'
            }}
          />
        </FlexCol>
      </Flex>
      <Box
        sx={{
          bg: 'BR1',
          width: '100%',
          flex: 1
        }}
      />
      <FlexCol
        sx={{
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

      <MotionBox
        style={{
          position: 'absolute',
          y,
          scale: size,
          top: '250px',
          height: '470px',
          width: '200px',
          zIndex: 2,
        }}
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          sx={{
            objectFit: 'contain',
          }}
        />
      </MotionBox>
    </FlexCol>
  )
}

ServiceHero.displayName = 'ServiceHero';