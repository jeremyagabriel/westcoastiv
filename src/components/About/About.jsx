/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BiPlusMedical } from 'react-icons/bi';
import { LazyBackgroundImage } from '../LazyBackgroundImage';
import { Flex, FlexCol, Image } from '../Components';
import { Heading } from '../Heading';
import Curve from '../../assets/curve.svg';

export const About = () => {
  const { data } = useStaticQuery(query);

  console.log('about data', data);

  const section = useMemo(() => {
    let bgImage;
    let portraitImage;
    let landscapeImage;

    const filterImages = (_data) => _data?.content?.slice(2)
      .forEach(image => {
        if (image.metaTags?.includes('background')) {
          bgImage = image.image?.file?.url;
        } else if (image.metaTags?.includes('portrait')) {
          portraitImage = image;
        } else if (image.metaTags?.includes('landscape')) {
          landscapeImage = image;
        }
    })
    filterImages(data);
    return {
      heading: data?.content?.[0]?.heading,
      text: data?.content?.[1]?.text?.text,
      bgImage,
      portraitImage: portraitImage?.image?.file?.url,
      portraitImageAlt: portraitImage?.altText,
      landscapeImage: landscapeImage?.image?.file?.url,
      landscapeImageAlt: landscapeImage?.altText
    }
  }, []);

  return (
    <Flex
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100vw',
        bg: 'BR1',
        minHeight: '1100px',
        position: 'relative',
        mt: '-480px',
      }}
    >
      <Box
        id='about'
        sx={{
          height: '1px',
          width: '1px',
          visibility: 'hidden',
          position: 'absolute',
          left: 0,
          top: ['-84px', '-100px']
        }}
      />
      <LazyBackgroundImage
        src={section.bgImage}
        sx={{
          display: ['none', null, null, 'block'],
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundPosition: 'left bottom',
          backgroundSize: '420px',
          opacity: 0.7,
        }}
      />
      <Flex
        data-comp={About.displayName}
        id='about'
        sx={{
          flexDirection: ['column', null, null, 'row'],
          justifyContent: ['flex-start', null, null, 'center'],
          alignItems: ['center', null, null, 'flex-start'],
          maxWidth: '760px',
          mb: 26,
          pt: 16,
        }}
      >
        <Box
          sx={{
            mr: [0, null, null, '100px']
          }}
        >
          <Text
            variant='text.h5Italic'
            sx={{
              textAlign: 'left',
              mb: 14,
              display: ['none', null, null, 'block']
            }}
          >
            {section.heading}
          </Text>
          <Heading
            text={section.heading}
            style={{
              display: ['flex', null, null, 'none'],
              mb: 14
            }}
          />
          <Box
            sx={{
              maxWidth: '330px'
            }}
          >
            <Text
              sx={{
                textAlign: ['center', null, null, 'left']
              }}
              dangerouslySetInnerHTML={{
                __html: section.text
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            mr: [0, null, null, 15]
          }}
        >
          <LazyBackgroundImage
            src={section.portraitImage}
            sx={{
              width: '284px',
              height: '381px',
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              bg: 'white',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                bg: '#059A7D',
                opacity: 0.44,
              }}
            />
            <Flex
              sx={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'absolute',
                top: 5,
                right: 5,
              }}
            >
              <Box
                sx={{
                  height: '1px',
                  width: '168px',
                  bg: '#D6FAF3',
                  mr: 5,
                }}
              />
              <BiPlusMedical
                sx={{
                  color: '#D6FAF3',
                  fontSize: '14px',
                }}
              />
            </Flex>
          </LazyBackgroundImage>

          <LazyBackgroundImage
            src={section.landscapeImage}
            sx={{
              width: '300px',
              height: '168px',
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              bg: 'white',
              mt: '-120px',
              ml: '-190px'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                bg: 'B1',
                opacity: 0.8,
              }}
            />
            <Flex
              sx={{
                alignItems: 'center',
                position: 'absolute',
                left: '10px',
                bottom: '10px',
              }}
            >
              <BiPlusMedical
                sx={{
                  color: '#D6FAF3',
                  fontSize: '14px',
                }}
              />
              <Box
                sx={{
                  height: '1px',
                  width: '168px',
                  bg: '#D6FAF3',
                  ml: 5,
                }}
              />
            </Flex>
          </LazyBackgroundImage>
          <BiPlusMedical
            sx={{
              position: 'absolute',
              color: '#10B0EE',
              opacity: 0.2,
              fontSize: '44px',
              bottom: '12px',
              right: '3px',
            }}
          />
        </Box>
      </Flex>

      <ImageUI
        src={Curve}
        sx={{
          position: 'absolute',
          top: '-5px',
          left: 0,
          right: 0,
          width: '100%',
          userSelect: 'none',
          transform: 'rotate(180deg)',
        }}
        draggable='false'
      />
    </Flex>
  )
}

About.displayName = 'About';

export const query = graphql`
  query AboutQuery {
    data: contentfulSection(metaHandle: {eq: "about-section"}) {
      metaTitle
      metaHandle
      metaTags
      content {
        ... on ContentfulButton {
          metaTitle
          metaHandle
          metaTags
          title
          url
        }
        ... on ContentfulHeading {
          metaTitle
          metaHandle
          metaTags
          heading
          subheading
        }
        ... on ContentfulImage {
          metaTitle
          metaHandle
          metaTags
          image {
            file {
              url
            }
          }
          altText
        }
        ... on ContentfulHero {
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
        ... on ContentfulMediaObject {
          metaTitle
          metaHandle
          metaTags
          image {
            image {
              file {
                url
              }
            }
            altText
          }
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
        ... on ContentfulSection {
          metaTitle
          metaHandle
          metaTags
          content {
            ... on ContentfulButton {
              metaTitle
              metaHandle
              metaTags
              title
              url
            }
            ... on ContentfulHeading {
              metaTitle
              metaHandle
              metaTags
              heading
              subheading
            }
            ... on ContentfulImage {
              metaTitle
              metaHandle
              metaTags
              image {
                file {
                  url
                }
              }
              altText
            }
            ... on ContentfulHero {
              metaTitle
              metaHandle
              metaTags
              backgroundImage {
                image {
                  fluid {
                    srcWebp
                  }
                }
                altText
              }
              overlayImage {
                image {
                  fluid {
                    srcWebp
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
            ... on ContentfulMediaObject {
              metaTitle
              metaHandle
              metaTags
              image {
                image {
                  file {
                    url
                  }
                }
                altText
              }
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
            ... on ContentfulText {
              metaTitle
              metaHandle
              metaTags
              text {
                text
              }
            }
          }
        }
        ... on ContentfulText {
          metaTitle
          metaHandle
          metaTags
          text {
            text
          }
        }
      }
    }
  }
`;