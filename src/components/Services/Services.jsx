/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Flex, FlexCol } from '../Components';
import { BookNowButton } from '../BookNowButton';
import { Heading } from '../Heading';
import { ServicesRow } from './ServicesRow';

export const Services = () => {
  const { data } = useStaticQuery(query);

  const section = useMemo(() => ({
    heading: data?.content?.[0]?.heading,
    row: data?.content?.[1]?.content
  }), []);

  return (
    <FlexCol
      data-comp={Services.displayName}
      sx={{
        alignItems: 'center',
        position: 'relative',
        width: '100vw',
        maxWidth: '906px',
        mb: [23, null, 26, '220px'],
        // mt: 20,
        // pt: 16,
        mx: 14
      }}
    >
      <Box
        id='services'
        sx={{
          height: '1px',
          width: '1px',
          visibility: 'hidden',
          position: 'absolute',
          left: 0,
          top: ['-104px', '-150px']
        }}
      />
      <Heading
        text={section.heading}
        style={{ mb: [18, null, 23] }}
      />
      <ServicesRow
        content={section.row}
      />
    </FlexCol>
  )
}

Services.displayName = 'Services';

export const query = graphql`
  query ServicesQuery {
    data: contentfulSection(metaHandle: {eq: "services-section"}) {
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