/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IoChevronDownSharp } from 'react-icons/io5';
import { Navbar } from './Navbar';
import { FlexCol} from '../Components';
import { BookNowButton } from '../BookNowButton';
import HeroImage from '../../assets/westcoastiv-hero.jpg';
import Curve from '../../assets/curve.svg';


export const Header = () => {
  const { data } = useStaticQuery(query);

  console.log('header data', data);

  const hero = useMemo(() => ({
    src: data?.backgroundImage?.image?.file?.url,
    heading: data?.headingContent?.heading,
    subheading: data?.headingContent?.subheading,
    text: data?.textContent?.[0]?.text?.text,
    button: data?.buttonContent
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
          background: 'linear-gradient(76.5deg, #003057 3.34%, rgba(23, 31, 149, 0) 57.82%)'
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
            fontSize: 2,
          }}
        >
          {hero.text}
        </Text>
      </Box>
      <Navbar
        button={hero.button}
      />
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
      <BookNowButton
        style={{
          position: 'absolute',
          bottom: '20%',
          left: [4, 7, 10]
        }}
        title={hero.button?.title}
        url={hero.button?.url}
      />
      <FlexCol
        sx={{
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 2,
        }}
      >
        <IoChevronDownSharp
          sx={{
            fontSize: '27px',
            color: 'B2',
            mb: '-5px'
          }}
        />
        <Text sx={{ fontSize: '10px' }}>
          Scroll
        </Text>
      </FlexCol>
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
  height: '100%',
  minHeight: '100vh',
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