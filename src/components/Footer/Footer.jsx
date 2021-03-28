/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { Flex, FlexCol } from '../Components';
import { Map } from './Map';
import { FormMain } from '../Form';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter
};


export const Footer = () => {
  const { data, socialLinks } = useStaticQuery(query);
  const logoLight = '/images/westcoastiv_logo_light.png';

  const section = useMemo(() => {
    const dataObj = data?.content?.reduce((obj, item) => {
      if (!item.metaHandle) return;
      obj[item.metaHandle] = item;
      return obj;
    }, {});
    return {
      image: dataObj['map']?.image?.file?.url,
      imageAlt: dataObj['map']?.altText,
      footerList: dataObj['footer-list']?.content
    };
  }, []);

  return (
    <Box
      data-comp={Footer.displayName}
      sx={{
        width: '100vw',
        position: 'relative'
      }}
    >
      <Map />
      <FlexCol
        sx={{
          width: '100%',
          bg: 'B2',
          pb: [21, null, 15],
          px: [14, null, null, null, null, 23],
          pt: [9, 14, 0]
        }}
      >
        <Flex
          sx={{
            width: '100%',
            flexDirection: ['column-reverse', null, 'row'],
            justifyContent: ['flex-start', null, 'space-between'],
            alignItems: ['center', null, 'flex-start'],
            mb: [15, null, 16]
          }}
        >
          <Flex
            sx={{
              pt: ['50px', null, 18, null, 25],
              flex: 1,
              flexWrap: 'wrap',
              maxWidth: ['320px', null, '100%']
              // justifyContent: 'space-between'
            }}
          >
            { section.footerList?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: ['auto', null, null, null, '160px'],
                    mr: index === 1
                      ? [0, null, 16]
                      : [15, null, 16],
                    mb: 16
                  }}
                >
                  <Text
                    sx={{
                      fontFamily: 'Tungsten, sans-serif',
                      fontWeight: 600,
                      color: 'white',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      mb: 10
                    }}
                  >
                    {item.headingContent?.heading}
                  </Text>
                  <Box
                    sx={{
                      fontSize: 0,
                      color: 'white',
                      lineHeight: 1.25,
                      fontFamily: 'body',
                      fontWeight: 300,
                      p: {
                        m: 0
                      },
                      a: {
                        textDecoration: 'none',
                        color: 'white'
                      }
                    }}
                  >
                    <ReactMarkdown>
                        {item.textContent?.[0]?.text?.text}
                    </ReactMarkdown>
                  </Box>
                </Box>
            ))}
          </Flex>
          <Flex
            sx={{
              justifyContent: 'center',
            }}
          >
            <FormMain
              sx={{
                // display: ['none', null, null, 'flex']
              }}
            />
          </Flex>
        </Flex>
        <FlexCol
          sx={{
            width: '100%',
            alignItems: 'center',
            mb: [0, null, 8]
          }}
        >
            <Image
              src={logoLight}
              alt='West Coast IV Logo'
              sx={{
                width: '47px',
                mb: 10
              }}
            />
            <Flex
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              { socialLinks?.content?.map((link, index) => (
                  <Link
                    key={link.metaHandle}
                    to={link.url}
                    target='_blank'
                    sx={{
                      mr: index !== socialLinks.content.length - 1
                        ? 10
                        : 0
                    }}
                  >
                    <Image
                      src={icons[link.metaHandle]}
                      sx={{
                        width: '22px'
                      }}
                    />
                  </Link>
              ))}
            </Flex>
        </FlexCol>
      </FlexCol>
      <Text
        sx={{
          color: 'white',
          fontSize: '11px',
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center'
        }}
      >
        © {new Date().getFullYear()} West Coast IV. All Rights Reserved
      </Text>
    </Box>
  );
};

Footer.displayName = 'Footer';

export const query = graphql`
  query FooterQuery {
    data: contentfulSection(metaHandle: {eq: "footer-section"}) {
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
    socialLinks: contentfulSection(metaHandle: {eq: "social-links"}) {
      content {
        ... on ContentfulButton {
          metaHandle
          url
        }
      }
    }
  }
`;