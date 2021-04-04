/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo, useEffect } from 'react';
import { Flex, FlexCol, Image } from '../Components';
import { ServiceBenefitsItem } from './ServiceBenefitsItem';


export const ServiceBenefits = ({ content, image }) => {

  return (
    <Flex
      data-comp={ServiceBenefits.displayName}
      sx={{
        position: 'relative',
        width: '100vw',
        pt: ['120px', null, null, '400px'],
        pb: ['120px', null, null, '300px'],
        bg: 'BR1',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column', null, null, 'row'],
        position: 'relative'
      }}
    >
      <Flex
        sx={{
          flexDirection: ['column', null, null, 'row'],
          width: ['100%', null, null, '720px', '880px'],
          justifyContent: ['flex-start', null, null, 'space-between'],
          alignItems: ['center', null, null, 'flex-start'],
          position: 'relative',
        }}
      >
        <FlexCol
          sx={{
            mb: ['50px', null, 20, 0]
          }}
        >
          { content?.content?.slice(0,2).map((item, index) => (
              <ServiceBenefitsItem
                content={item}
                index={index}
                position='left'
                key={index}
                sx={{
                  // mr: [0, null, null, '240px', '390px']
                }}
              />
          ))}
        </FlexCol>
        <FlexCol>
          { content?.content?.slice(2,4).map((item, index) => (
              <ServiceBenefitsItem
                content={item}
                index={index}
                position='right'
                key={index}
              />
          ))}
        </FlexCol>
        <Box
          sx={{
            display: ['none', null, null, 'block', 'none'],
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '350px',
            width:'210px',
            zIndex: 2,
          }}
        >
          <Image
            src={image}
            alt='Service image'
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

ServiceBenefits.displayName = 'ServiceBenefits';