/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BiPlusMedical } from 'react-icons/bi';
import { Flex, FlexCol, Image } from '../Components';


export const Quote = () => {
  const { data } = useStaticQuery(query);

  console.log('quote data', data);

  const hero = useMemo(() => ({
    image: data?.backgroundImage?.image?.file?.url,
    heading: data?.headingContent?.heading,
    subheading: data?.headingContent?.subheading
  }), []);

  return (
    <Flex
      data-comp={Quote.displayName}
      sx={{
        width: '100vw',
        bg: 'B1',
        minHeight: '495px',
        position: 'relative',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: hero.image ? `url(${hero.image})` : null,
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        px: 4
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(76.5deg, rgba(0, 48, 87, 0.96) 28.02%, rgba(0, 48, 87, 0.88) 91.87%)',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}
      />
      <FlexCol
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          maxWidth: '876px',
          maxHeight: '334px',
          // borderTop: '0.5px solid',
          // borderBottom: '0.5px solid',
          // borderColor: 'white',
          // boxShadow: '-.5px -.5px 0 rgba(255,255,255,0.25)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '1px',
            bg: 'transparent',
            boxShadow: '0 -.5px 0 rgba(255,255,255,0.25)'
          }}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BiPlusMedical
            sx={{
              fontSize: '24px',
              color: '#D1FAF2',
              opacity: 0.8
            }}
          />
          <FlexCol
            sx={{
              maxWidth: '440px',
              mx: 12,
              alignItems: 'center'
            }}
          >
            <Text
              variant='text.h6'
              sx={{
                color: 'white',
                textAlign: 'center',
                textTransform: 'none',
                width: '100%',
              }}
            >
              {hero.heading}
            </Text>
            <Text
              variant='text.h7'
              sx={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 'medium',
                mt: 2
              }}
            >
              {hero.subheading}
            </Text>
          </FlexCol>
          <BiPlusMedical
            sx={{
              fontSize: '24px',
              color: '#D1FAF2',
              opacity: 0.8
            }}
          />
        </Flex>
        <Box
          sx={{
            width: '100%',
            height: '1px',
            bg: 'transparent',
            boxShadow: '0 .5px 0 rgba(255,255,255,0.25)'
          }}
        />
      </FlexCol>
    </Flex>
  )
}

Quote.displayName = 'Quote';

export const query = graphql`
  query QuoteQuery {
    data: contentfulHero(metaHandle: {eq: "quotes-hero"}) {
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