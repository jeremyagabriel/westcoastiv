/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, FlexCol, Image } from '../Components';


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
      <Box
        sx={{
          bg: 'white',
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image
          src={section.image}
          alt={section.imageAlt}
          sx={{
            height: '400px',
            objectFit: 'cover'
          }}
        />
        <Text
          sx={{
            fontFamily: 'Tungsten, sans-serif',
            letterSpacing: '0.05em',
            fontWeight: 300,
            color: 'white',
            bg: 'B2',
            pt: '11px',
            pb: '8px',
            px: '30px',
            borderRadius: '5px',
            position: 'absolute',
            top: '70px',
            left: '50px',
            cursor: 'pointer'
          }}
        >
          {'\> '}Go to Google Maps
        </Text>
      </Box>
      <Flex
        sx={{
          width: '100%',
          height: '300px',
          bg: 'B2',
          alignItems: 'flex-end',
          pb: 12,
          px: 4
        }}
      >
        <Flex>
          { section.footerList?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '160px',
                  mr: 6
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
                    mb: '20px'
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
      <FlexCol
       sx={{
         position: 'absolute',
         width: '400px',
         height: '650px',
         bottom: 12,
         right: 10,
         bg: 'white',
         borderRadius: '6px',
         boxShadow: '0px -3px 17px rgba(0, 0, 0, 0.08)',
         p: 4
       }}
      >
        <Text
          sx={{
            fontFamily: 'Tungsten, sans-serif',
            fontWeight: 600,
            color: 'B2',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            mb: 12
          }}
        >
          Contact Us
        </Text>
        <Text
          sx={{
            color: 'B2',
            fontFamily: 'Tungsten, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.01em',
            pb: '5px',
            boxShadow: '0 0.5px 0 #0A2A42',
            mb: '60px'
          }}
        >
          First name
        </Text>
        <Text
          sx={{
            color: 'B2',
            fontFamily: 'Tungsten, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.01em',
            pb: '5px',
            boxShadow: '0 0.5px 0 #0A2A42',
            mb: '60px'
          }}
        >
          Last name
        </Text>
        <Text
          sx={{
            color: 'B2',
            fontFamily: 'Tungsten, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.01em',
            pb: '5px',
            boxShadow: '0 0.5px 0 #0A2A42',
            mb: '60px'
          }}
        >
          Email
        </Text>
        <Text
          sx={{
            color: 'B2',
            fontFamily: 'Tungsten, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.01em',
            pb: '5px',
            boxShadow: '0 0.5px 0 #0A2A42',
            mb: '60px'
          }}
        >
          Message
        </Text>
        <Text
          variant='buttons.primary'
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 3,
            fontSize: '16px',
            py: '10px'
          }}
        >
          Send Message
        </Text>
      </FlexCol>
    </Box>
  );
};

const labelSx = {

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