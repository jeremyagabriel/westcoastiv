/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BiPlusMedical } from 'react-icons/bi';
import { Flex, FlexCol, Image } from '../Components';
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
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100vw',
        bg: 'BR1',
        minHeight: '1100px',
        position: 'relative',
        mt: '-480px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom',
        backgroundImage: section.bgImage ? `url(${section.bgImage})` : null,
        backgroundSize: '36%',
      }}
    >
      <Flex
        data-comp={About.displayName}
        id='about'
        sx={{
          justifyContent: 'center',
          maxWidth: '760px',
          mb: 16
        }}
      >
        <Box sx={{ mr: '100px' }}>
          <Text
            variant='text.h5Italic'
            sx={{ textAlign: 'left', mb: 4 }}
          >
            {section.heading}
          </Text>
          <Box
            sx={{
              maxWidth: '330px'
            }}
          >
            <Text
              dangerouslySetInnerHTML={{
                __html: section.text
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mr: '40px' }}>
          <Box
            sx={{
              width: '284px',
              height: '381px',
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              bg: 'white',
            }}
          >
            <Image
              src={section.portraitImage}
              alt={section.portraitImageAlt}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
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
                top: '10px',
                right: '10px',
              }}
            >
              <Box
                sx={{
                  height: '1px',
                  width: '168px',
                  bg: 'transparent',
                  mr: '10px',
                  boxShadow: '0 0.5px 0 #D6FAF3',
                  transform: 'translateY(-0.5px)'
                }}
              />
              <BiPlusMedical
                sx={{
                  color: '#D6FAF3',
                  fontSize: '14px',
                }}
              />
            </Flex>
          </Box>

          <Box
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
            <Image
              src={section.landscapeImage}
              alt={section.landscapeImageAlt}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
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
                  bg: 'transparent',
                  ml: '10px',
                  boxShadow: '0 0.5px 0 #D6FAF3',
                  transform: 'translateY(-0.5px)'
                }}
              />
            </Flex>
          </Box>
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
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          userSelect: 'none',
          transform: 'rotate(180deg)',
        }}
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