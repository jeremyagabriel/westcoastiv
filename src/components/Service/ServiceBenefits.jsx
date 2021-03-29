/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo, useEffect } from 'react';
import { Flex, FlexCol, Image } from '../Components';
import { ServiceBenefitsItem } from './ServiceBenefitsItem';


export const ServiceBenefits = ({ content }) => {

  return (
    <Flex
      data-comp={ServiceBenefits.displayName}
      sx={{
        position: 'relative',
        width: '100vw',
        // minHeight: '700px',
        pt: ['120px', null, null, '400px'],
        pb: ['120px', null, null, '300px'],
        bg: 'BR1',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column', null, null, 'row']
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
                mr: [0, null, null, '390px']
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
    </Flex>
  )
}

ServiceBenefits.displayName = 'ServiceBenefits';