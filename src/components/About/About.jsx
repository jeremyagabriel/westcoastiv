/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BiPlusMedical } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import { LazyBackgroundImage } from '../LazyBackgroundImage';
import { Flex, FlexCol, Image } from '../Components';
import { Heading } from '../Heading';
import Curve from '../../assets/curve.svg';
import CurveMobile from '../../assets/curve-mobile.svg';


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
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          bg: 'BR1',
          height: ['1400px', '1600px', '1600px', '1200px'],
          position: 'absolute',
          top: ['-410px', '-510px', '-630px', '-520px'],
          zIndex: -1
        }}
      >
        <ImageUI
          src={Curve}
          sx={{
            display: ['none', null, null, 'block'],
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
        <ImageUI
          src={CurveMobile}
          sx={{
            display: ['block', null, null, 'none'],
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
      </Box>

      <LazyBackgroundImage
        src={section.bgImage}
        sx={{
          display: ['none', null, null, 'block'],
          position: 'absolute',
          width: '100%',
          height: '110%',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundPosition: 'left bottom',
          backgroundSize: '440px',
          opacity: 0.7,
        }}
      />

      <Flex
        data-comp={About.displayName}
        sx={{
          flexDirection: ['column', null, null, 'row'],
          justifyContent: ['flex-start', null, null, 'center'],
          alignItems: ['center', null, null, 'flex-start'],
          maxWidth: '760px',
          mb: [23, null, 26],
          mx: [10, null, null, '50px', 0],
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
            top: ['-124px', '-160px']
          }}
        />
        <Box
          sx={{
            mr: [17, null, null, '100px'],
            ml: [17, null, null, 0],
            mb: [23, null, null, 0],
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
              maxWidth: '330px',
              textAlign: ['center', null, null, 'left'],
              fontFamily: 'body',
              fontSize: [0, 1],
              fontWeight: 300,
              p: {
                m: 0,
                mb: 8
              }
            }}
          >
            <ReactMarkdown>
              {section.text}
            </ReactMarkdown>
          </Box>
        </Box>

        <Box
          sx={{
            mr: [0, null, null, 15],
            ml: ['24%', '20%', '40%', 0]
          }}
        >
          <Box
            sx={{
              width: ['210px', null, '284px'],
              height: ['282px', null, '381px'],
              position: 'relative'
            }}
          >
            <LazyBackgroundImage
              src={section.portraitImage}
              sx={{
                width: '100%',
                height: '100%',
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
                    width: ['112px', null, '168px'],
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
            <BiPlusMedical
                sx={{
                  position: 'absolute',
                  color: '#10B0EE',
                  opacity: 0.2,
                  fontSize: '44px',
                  bottom: ['60px', null, '-40px'],
                  left: ['-60px', null, 'auto'],
                  right: ['auto', null, '-40px']
                }}
              />
          </Box>

          <LazyBackgroundImage
            src={section.landscapeImage}
            sx={{
              width: ['219px', null, '300px'],
              height: ['123px', null, '168px'],
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              bg: 'white',
              mt: ['-50px', null, '-120px'],
              ml: ['-90px', null, '-190px']
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
                  width: ['124px', null, '168px'],
                  bg: '#D6FAF3',
                  ml: 5,
                }}
              />
            </Flex>
          </LazyBackgroundImage>
        </Box>
      </Flex>
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