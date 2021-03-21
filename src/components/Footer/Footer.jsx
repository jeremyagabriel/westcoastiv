/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex } from '../Components';
import { Map } from './Map';
import { Form } from './Form';


export const Footer = () => {
  const { data } = useStaticQuery(query);

  console.log('footer data', data);

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
      <Flex
        sx={{
          width: '100%',
          height: '300px',
          bg: 'B2',
          alignItems: 'flex-end',
          pb: 22,
          px: 14
        }}
      >
        <Flex>
          { section.footerList?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '160px',
                  mr: 16
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
                <Text
                  sx={{
                    color: 'white',
                    lineHeight: 1.25,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.textContent?.[0]?.text?.text
                  }}
                />
              </Box>
          ))}
        </Flex>
      </Flex>
      <Form />
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
  }
`;