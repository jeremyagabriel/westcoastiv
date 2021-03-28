/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BiPlusMedical } from 'react-icons/bi';
import { Flex, FlexCol, Image } from '../Components';
import { LazyBackgroundImage } from '../LazyBackgroundImage';
import { QuoteSwiper } from './QuoteSwiper';


export const Quote = () => {
  const { data } = useStaticQuery(query);

  const hero = useMemo(() => ({
    image: data?.backgroundImage?.image?.file?.url,
  }), []);

  return (
    <LazyBackgroundImage
      data-comp={Quote.displayName}
      src={hero.image}
      sx={{
        display: 'flex',
        width: '100vw',
        bg: 'B1',
        minHeight: ['350px', null, '495px'],
        position: 'relative',
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        px: 14
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
          minHeight: ['350px', null, '495px'],
          maxWidth: '876px',
          maxHeight: '334px',
          py: ['50px', null, 20],
          // borderTop: '0.5px solid',
          // borderBottom: '0.5px solid',
          // borderColor: 'white',
          // boxShadow: '-.5px -.5px 0 rgba(255,255,255,0.5)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '1px',
            bg: 'rgba(255,255,255,0.5)',
          }}
        />
        <Flex
          sx={{
            flexDirection: ['column', null, 'row'],
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '24px',
              height: '24px',
              minWidth: '24px',
              minHeight: '24px',
              mb: [12, null, 0]
            }}
          >
            <BiPlusMedical
              sx={{
                fontSize: '24px',
                color: '#D1FAF2',
                opacity: 0.8
              }}
            />
          </Flex>

          <QuoteSwiper
            content={data?.textContent}
          />

          <Flex
            sx={{
              display: ['none', null, 'flex'],
              justifyContent: 'center',
              alignItems: 'center',
              width: '24px',
              height: '24px',
              minWidth: '24px',
              minHeight: '24px',
            }}
          >
            <BiPlusMedical
              sx={{
                fontSize: ['24px'],
                color: '#D1FAF2',
                opacity: 0.8
              }}
            />
          </Flex>
        </Flex>
        <Box
          sx={{
            width: '100%',
            height: '1px',
            bg: 'rgba(255,255,255,0.5)',
          }}
        />
      </FlexCol>
    </LazyBackgroundImage>
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