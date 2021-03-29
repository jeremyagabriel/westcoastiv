/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Flex, FlexCol, Image } from '../Components';

const MotionBox = motion.custom(Box);


export const ServiceBenefitsItem = ({
  content,
  index,
  position,
  ...props
}) => {

  const offset = 635;
  const { scrollY } = useViewportScroll();
  const xLeft = useTransform(scrollY, value => {
    return (value - offset) > 0 ? 0 : value - offset
  });
  const xRight = useTransform(scrollY, value => {
    return (-value + offset) < 0 ? 0 : -value + offset
  });
  const y = useTransform(scrollY, value => {
    return (value - offset) > 0 ? 0 : value - offset
  });

  const item = useMemo(() => ({
    image: content?.image?.image?.file?.url,
    alt: content?.image?.altText,
    heading: content?.headingContent?.heading,
    text: content?.textContent?.[0]?.text?.text
  }), []);

  return (
    <MotionBox
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '250px',
        mb: index === 0 ? ['50px', null, 20] : 0,
      }}
      style={{
        // x: position === 'left' ? xLeft : xRight,
        // y,
      }}
      {...props}
    >
      <Image
        src={item.image}
        alt={item.alt}
        sx={{
          height: '24px',
          objectFit: 'contain',
          mb: 5
        }}
      />
      <Text
        variant='text.h6'
        sx={{ mb: 5, textTransform: 'none' }}
      >
        {item.heading}
      </Text>
      <Text
        sx={{ textAlign: 'center', height: '50px' }}
      >
        {item.text}
      </Text>
    </MotionBox>
  )
}

ServiceBenefitsItem.displayName = 'ServiceBenefitsItem';