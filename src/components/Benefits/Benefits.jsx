/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Flex, FlexCol } from '../Components';
import { BookNowButton } from '../BookNowButton';
import { Heading } from '../Heading';
import { BenefitsRow } from './BenefitsRow';

export const Benefits = () => {
  const { data } = useStaticQuery(query);

  console.log('benefits data', data);

  const section = useMemo(() => ({
    heading: data?.content?.[0]?.heading,
    row: data?.content?.[1]?.content
  }), []);

  return (
    <FlexCol
      data-comp={Benefits.displayName}
      id='benefits'
      sx={{
        alignItems: 'center',
        width: '100vw',
        maxWidth: '906px',
        py: 16,
        mx: 4
      }}
    >
      <Heading
        text={section.heading}
        style={{ mb: 10 }}
      />
      <BenefitsRow
        content={section.row}
      />
      <BookNowButton />
    </FlexCol>
  )
}

Benefits.displayName = 'Benefits';

export const query = graphql`
  query BenefitsQuery {
    data: contentfulSection(metaHandle: {eq: "benefits-section"}) {
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