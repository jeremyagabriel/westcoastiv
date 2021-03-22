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
        flexDirection: ['column', null, null, 'row'],
        width: '100%',
        justifyContent: ['flex-start', null, null, 'space-between'],
        alignItems: ['center', null, null, 'flex-start'],
        mb: 16,
        mx: 14
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
              maxWidth: '225px',
              mx: 10,
              mb: index !== content.length - 1
                ? [10, '50px', null, 0]
                : 0,
            }}
            >
            <Image
              src={item.src}
              alt={item.alt}
              sx={{
                height: '60px',
                objectFit: 'contain',
                mb: 10
              }}
            />
            <Text
              variant='text.h7'
              sx={{
                textAlign: 'center',
                mb: 10
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