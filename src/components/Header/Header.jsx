/** @jsx jsx */
import { jsx, Text, Box, Flex, NavLink, Image } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Navbar } from './Navbar';
import HeroImage from '../../assets/westcoastiv-hero.jpg';
import Curve from '../../assets/curve.svg';


export const Header = () => {
  const { data } = useStaticQuery(query);

  console.log('data', data);

  const hero = useMemo(() => ({
    src: data?.backgroundImage?.image?.file?.url,
    heading: data?.headingContent?.heading,
    subheading: data?.headingContent?.subheading,
    text: data?.textContent?.[0]?.text?.text
  }), []);

  return (
    <Box
      data-comp={Header.displayName}
      sx={heroSx(HeroImage)}
      id='header'
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(0,48,87)',
          background: 'linear-gradient(82deg, rgba(0,48,87,1) 0%, rgba(0,48,87,0) 56%)'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: [4, 7, 10],
          marginTop: -6
        }}
      >
        <Text
          variant='text.h1'
          sx={{
            color: 'P2',
            fontSize: [8, 10]
          }}
        >
          {hero.heading}
        </Text>
        <Text
          variant='text.h1'
          sx={{
            color: 'white',
            fontSize: [8, 10],
            mt: -1,
            mb: 2,
          }}
        >
          {hero.subheading}
        </Text>
        <Text
          sx={{
            color: 'white',
            maxWidth: '360px',
          }}
        >
          {hero.text}
        </Text>
      </Box>
      <Navbar />
      <Image
        src={Curve}
        sx={{
          position: 'absolute',
          bottom: '-5px',
          left: 0,
          right: 0,
          width: '100%',
          userSelect: 'none',
        }}
      />
      <NavLink
        variant='buttons.primary'
        href='https://westcoastiv.netlify.com'
        target='_blank'
        sx={{
          position: 'absolute',
          left: [4, 7, 10],
          bottom: '20%',
        }}
      >
        Book Now
      </NavLink>
    </Box>
  )
}

const heroSx = (src) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: src ? `url(${src})` : null,
  backgroundSize: 'cover',
  width: '100vw',
  height: '100vw',
  minHeight: '600px',
  maxHeight: '800px',
});

Header.displayName = 'Header';

export const query = graphql`
  query HeaderQuery {
    data: contentfulHero(metaHandle: {eq: "home-page-hero"}) {
      metaTitle
      metaHandle
      metaTags
      backgroundImage {
        image {
          file {
            url
          }
        }
        altText
      }
      overlayImage {
        image {
          file {
            url
          }
        }
        altText
      }
      backgroundColor
      headingContent {
        heading
        subheading
      }
      textContent {
        text {
          text
        }
      }
      buttonContent {
        title
        url
      }
    }
  }
`;