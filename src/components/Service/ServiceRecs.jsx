/** @jsx jsx */
import { jsx, Text, Box, Image as ImageUI } from 'theme-ui';
import React, { useMemo } from 'react';
import { Flex, FlexCol, Image } from '../Components';
import { ServiceRecsItem } from './ServiceRecsItem';


export const ServiceRecs = ({ content }) => {
  console.log('service recs', content);

  return (
    <Box
      data-comp={ServiceRecs.displayName}
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          bg: 'BR1',
          // flex: 1,
          height: '100px'
        }}
      />
      <FlexCol
        sx={{
          minHeight: '600px',
          alignItems: 'center',
          pb: 20,
        }}
      >
        <Text
          variant='text.h5Italic'
          sx={{ mt: '50px', mb: '35px' }}
        >
          Our Recommendations
        </Text>
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          { content?.content?.map((item, index) => (
              <ServiceRecsItem
                content={item}
                index={index}
                key={index}
              />
          ))}
        </Flex>
      </FlexCol>
    </Box>
  )
}

ServiceRecs.displayName = 'ServiceRecs';