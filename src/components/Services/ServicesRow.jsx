/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo, useCallback } from 'react';
import { navigate } from 'gatsby';
import { Flex, FlexCol, Image } from '../Components';
import { LazyBackgroundImage } from '../LazyBackgroundImage';
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
        flexDirection: ['column', null, null, 'row'],
        justifyContent: ['flex-start', null, null, 'center'],
        alignItems: ['center', null, null, 'flex-start'],
        width: '100%',
        zIndex: 3,
        px: '20px',
      }}
    >
      { content?.map((item, index) => {
        item = rowItem(index);
        return (
          <LazyBackgroundImage
            key={index}
            onClick={() => navigate(item.linkUrl)}
            src={item.src}
            sx={{
              mr: [0, null, null, index !== content.length - 1
                ? '50px'
                : null],
              width: ['75vw', null, null, '280px'],
              height: ['140px', '190px', '240px', '350px'],
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              bg: 'B1',
              boxShadow: '1px 5px 15px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              mb: [
                index !== content.length -1 ? '50px' : 0,
                null, null, 0
              ]
            }}
          >
            {/* <Image
              src={item.src}
              alt={item.alt}
              sx={{
                height: '350px',
                objectFit: 'cover',
              }}
            /> */}
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
                background: [
                  'linear-gradient(180deg, rgba(0, 48, 87, 0.8645) 74.61%, rgba(0, 48, 87, 0.1995) 101.44%)',
                  null,
                  null,
                  'linear-gradient(180deg, rgba(0, 48, 87, 0.8645) 57.44%, rgba(0, 48, 87, 0) 100%)'
                ]
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
                  mb: 7,
                }}
              />
              <Flex
                sx={{
                  maxWidth: ['100%', null, null, '160px'],
                  height: ['auto', null, null, '62px'],
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: [6, null, null, 8],
                }}
              >
                <Text
                  variant='text.h6'
                  sx={{
                    fontSize: [4, null, 5],
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  {item.heading}
                </Text>
              </Flex>
              <Flex
                sx={{
                  alignItems: 'center',
                }}
              >
                <ImageUI
                  src={Chevron}
                  alt='chevron icon'
                  sx={{
                    height: '10px',
                    mr: 2,
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
          </LazyBackgroundImage>
        );
      })

      }
    </Flex>
  )
}

ServicesRow.displayName = 'ServicesRow';