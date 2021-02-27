/** @jsx jsx */
import { jsx, Text, Box, Flex, NavLink, Image } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Navbar } from './Navbar';
import HeroImage from '../../assets/westcoastiv-hero.jpg';
import Curve from '../../assets/curve.svg';


export const Header = () => {
  const { hero } = useStaticQuery(query);

  console.log('hero', hero);

  const data = useMemo(() => ({
    src: hero?.backgroundImage?.image?.file?.url
  }), []);

  return (
    <Box
      data-comp={Header.displayName}
      sx={heroSx(HeroImage)}
    >
      <Text></Text>
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
    </Box>
  )
}

const heroSx = (src) => ({
  position: 'relative',
  backgroundColor: 'primary.royalblue',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: src ? `url(${src})` : null,
  backgroundSize: 'cover',
  width: '100vw',
  height: '80vw',
  minHeight: '400px',
  maxHeight: '700px',
});

Header.displayName = 'Header';

export const query = graphql`
  query HeaderQuery {
    hero: contentfulHero(metaHandle: {eq: "home-page-hero"}) {
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