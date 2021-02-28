/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo, useCallback } from 'react';
import { navigate } from 'gatsby';
import { Flex, FlexCol, Image } from '../Components';
import SnowflakeIcon from '../../assets/icon-snowflake.svg';
import NeedleIcon from '../../assets/icon-needle.svg';
import IVIcon from '../../assets/icon-IV.svg';
import Chevron from '../../assets/chevron-right-mint.svg';

const icons = {
  'hydration therapy': IVIcon,
  'cryotherapy': SnowflakeIcon,
  'vitamin injections': NeedleIcon
};

export const ServicesRow = ({ content }) => {

  const rowItem = useCallback(index => {
    const item = content?.[index];
    return {
    src: item?.image?.image?.file?.url,
    alt: item?.image?.altText,
    heading: item?.headingContent?.heading,
    linkText: item?.buttonContent?.title,
    linkUrl: item?.buttonContent?.url
    }
  });

  return (
    <Flex
      data-comp={ServicesRow.displayName}
      sx={{
        width: '100%',
        justifyContent: 'center',
        mb: 6,
        zIndex: 3,
      }}
    >
      { content?.map((item, index) => {
        item = rowItem(index);
        return (
          <Box
            key={index}
            sx={{
              mr: index !== content.length - 1
                ? '50px'
                : null,
              width: '280px',
              height: '350px',
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              bg: 'B1',
              boxShadow: '1px 5px 15px rgba(0, 0, 0, 0.25)'
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              sx={{
                height: '350px',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
                bg: 'B1',
                background: 'linear-gradient(180deg, rgba(0, 48, 87, 0.8645) 57.44%, rgba(0, 48, 87, 0) 100%)'
              }}
            />
            <FlexCol
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <ImageUI
                src={icons[item.heading.toLowerCase()]}
                alt='icon'
                sx={{
                  height: '26px',
                  objectFit: 'contain',
                  mb: '14px'
                }}
              />
              <Flex
                sx={{
                  maxWidth: '160px',
                  height: '62px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Text
                  variant='text.h6'
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  {item.heading}
                </Text>
              </Flex>
              <Flex
                onClick={() => navigate(item.linkUrl)}
                sx={{
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <ImageUI
                  src={Chevron}
                  alt='chevron icon'
                  sx={{
                    height: '10px',
                    mr: '4px',
                    fill: 'white !important'
                  }}
                />
                <Text
                  variant='text.h6'
                  sx={{
                    textAlign: 'center',
                    fontWeight: 'medium',
                    letterSpacing: '0.2em',
                    fontSize: 2,
                    color: 'P2'
                  }}
                >
                  {item.linkText}
                </Text>
              </Flex>
            </FlexCol>
          </Box>
        );
      })

      }
    </Flex>
  )
}

ServicesRow.displayName = 'ServicesRow';