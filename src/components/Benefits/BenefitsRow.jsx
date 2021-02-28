/** @jsx jsx */
import { jsx, Text, Box, Image } from 'theme-ui';
import React, { useMemo, useCallback } from 'react';

import { Flex, FlexCol } from '../Components';

export const BenefitsRow = ({ content }) => {

  const rowItem = useCallback(index => ({
    src: content?.[index]?.image?.image?.file?.url,
    alt: content?.[index]?.image?.altText,
    heading: content?.[index]?.headingContent?.heading,
    text: content?.[index]?.textContent?.[0]?.text?.text
  }));

  return (
    <Flex
      data-comp={BenefitsRow.displayName}
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        mb: 6
      }}
    >
      { content?.map((item, index) => {
        item = rowItem(index);
        return (
          <FlexCol
            key={index}
            sx={{
              alignItems: 'center',
              px: 1,
              maxWidth: '225px'
            }}
            >
            <Image
              src={item.src}
              alt={item.alt}
              sx={{
                height: '60px',
                objectFit: 'contain',
                mb: '20px'
              }}
            />
            <Text
              variant='text.h7'
              sx={{
                textAlign: 'center',
                mb: '20px'
              }}
            >
              {item.heading}
            </Text>
            <Text
              sx={{
                textAlign: 'center'
              }}
            >
              {item.text}
            </Text>
          </FlexCol>
        );
      })

      }
    </Flex>
  )
}

BenefitsRow.displayName = 'BenefitsRow';