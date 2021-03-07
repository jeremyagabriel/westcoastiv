/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { Flex, FlexCol, Image } from '../Components';


export const ServiceBenefitsItem = ({ content, index, ...props }) => {

  const item = useMemo(() => ({
    image: content?.image?.image?.file?.url,
    alt: content?.image?.altText,
    heading: content?.headingContent?.heading,
    text: content?.textContent?.[0]?.text?.text
  }), []);

  return (
    <FlexCol
      sx={{
        alignItems: 'center',
        maxWidth: '250px',
        mb: index === 0 ? '80px' : 0,
      }}
      {...props}
    >
      <Image
        src={item.image}
        alt={item.alt}
        sx={{
          height: '24px',
          objectFit: 'contain',
          mb: '10px'
        }}
      />
      <Text
        variant='text.h6'
        sx={{ mb: '10px' }}
      >
        {item.heading}
      </Text>
      <Text
        sx={{ textAlign: 'center', height: '50px' }}
      >
        {item.text}
      </Text>
    </FlexCol>
  )
}

ServiceBenefitsItem.displayName = 'ServiceBenefitsItem';