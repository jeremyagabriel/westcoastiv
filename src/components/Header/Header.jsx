/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useRecoilValue } from 'recoil';
import { isMobile } from 'react-device-detect';
import { IoChevronDownSharp } from 'react-icons/io5';
import { Navbar } from './Navbar';
import { FlexCol, Flex} from '../Components';
import { BookNowButton } from '../BookNowButton';
import { navbarAtom, isTopAtom } from '../../lib/atoms';
import HeroImage from '../../assets/westcoastiv-hero.jpg';
import Curve from '../../assets/curve.svg';
import CurveMobile from '../../assets/curve-mobile.svg';


export const Header = () => {
  const { data } = useStaticQuery(query);
  const navbarPos = useRecoilValue(navbarAtom);
  const isTop = useRecoilValue(isTopAtom);

  const hero = useMemo(() => ({
    src: data?.backgroundImage?.image?.file?.url,
    heading: data?.headingContent?.heading,
    subheading: data?.headingContent?.subheading,
    text: data?.textContent?.[0]?.text?.text,
    button: data?.buttonContent
  }), []);

  const staticHeroImg = '/images/westcoastiv-hero.jpg';

  return (
    <Box
      data-comp={Header.displayName}
      sx={heroSx(staticHeroImg, isMobile)}
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
          background: [
            `linear-gradient(98.66deg,
            rgba(0, 48, 87, 0.57) 13.42%,
            rgba(23, 31, 149, 0.5) 123.33%)`,
            null,
            null,
            'linear-gradient(76.5deg, #003057 3.34%, rgba(23, 31, 149, 0) 57.82%)'
          ]
        }}
      />
      <FlexCol
        sx={{
          position: 'absolute',
          width: '100%',
          marginTop: -16,
          maxWidth: '1157px',
          px: 14,
          mb: [0, null, null, 16],
          alignItems: ['center', null, null, 'flex-start']
        }}
      >
        <Text
          variant='text.h1'
          sx={{
            color: 'P2',
            fontSize: [7, 8, 10],
            textAlign: ['center', null, null, 'left'],
          }}
        >
          {hero.heading}
        </Text>
        <Text
          variant='text.h1'
          sx={{
            color: 'white',
            fontSize: [7, 8, 10],
            textAlign: ['center', null, null, 'left'],
            mt: -4,
            mb: 8,
          }}
        >
          {hero.subheading}
        </Text>
        <Text
          sx={{
            color: 'white',
            maxWidth: ['240px', '360px'],
            fontSize: 2,
            textAlign: ['center', null, null, 'left'],
          }}
        >
          {hero.text}
        </Text>
        <BookNowButton
          style={{
            mt: ['70px', null, null, '50px'],
            zIndex: 1
          }}
          title={hero.button?.title}
          url={hero.button?.url}
        />
      </FlexCol>
      <Navbar />
      <Image
        src={Curve}
        sx={{
          display: ['none', null, null, 'block'],
          position: 'absolute',
          bottom: '-5px',
          left: 0,
          right: 0,
          width: '100%',
          userSelect: 'none',
        }}
        draggable='false'
      />
      <Image
        src={CurveMobile}
        sx={{
          display: ['block', null, null, 'none'],
          position: 'absolute',
          bottom: '-5px',
          left: 0,
          right: 0,
          width: '100%',
          userSelect: 'none',
        }}
        draggable='false'
      />
      <FlexCol
        sx={{
          opacity: isTop ? '1' : '0',
          alignItems: 'center',
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 8,
          transition: '0.2s',
          userSelect: 'none'
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

const heroSx = (src, mobile) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'B1',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: ['65% 50%', '75% 50%', '90% 50%', 'center center'],
  backgroundImage: src ? `url(${src})` : null,
  backgroundSize: 'cover',
  width: '100vw',
  height: [mobile ? '80vh' : '90vh', null, null, '100vh'],
  minHeight: [mobile ? null : '600px'],
  maxHeight: [mobile ? '700px' : '900px'],
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