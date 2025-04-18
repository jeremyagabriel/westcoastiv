/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { Flex, FlexCol } from '../Components';
import { RecsItem } from './RecsItem';
import { RecsSwiper } from './RecsSwiper';


export const Recommendations = ({ content }) => {

  return (
    <Box
      data-comp={Recommendations.displayName}
      sx={{
        width: '100%',
      }}
    >
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
            display: ['none', null, 'flex']
          }}
        >
          { content?.content?.map((item, index) => (
              <RecsItem
                content={item}
                index={index}
                key={index}
                handle={content?.metaHandle}
              />
          ))}
        </Flex>
        <RecsSwiper
          content={content?.content}
          handle={content?.metaHandle}
          sx={{
            display: ['block', null, 'none']
          }}
        />
      </FlexCol>
    </Box>
  )
}

Recommendations.displayName = 'Recommendations';