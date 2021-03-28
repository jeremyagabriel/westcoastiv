/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useMemo } from 'react';
import { FlexCol, Image } from '../Components';
import { BookNowButton } from '../BookNowButton';


export const RecsItem = ({
  content,
  index,
  ...props
}) => {

  const item = useMemo(() => ({
    image: content?.image?.image?.file?.url,
    alt: content?.image?.altText,
    heading: content?.headingContent?.heading,
    text: content?.textContent?.[0]?.text?.text,
    button: content?.buttonContent
  }), []);

  return (
    <FlexCol
      data-comp={RecsItem.displayName}
      sx={{
        width: '230px',
        // height: '420px',
        px: 5,
        pt: 5,
        pb: '25px',
        background: 'rgba(23, 31, 149, 0.03)',
        borderRadius: '6px',
        m: '15px',
        alignItems: 'center',
      }}
      {...props}
    >
      <Box
        sx={{
          height: '200px',
        }}
      >
        <Image
          src={item.image}
          alt={item.alt}
          sx={{
            height: '200px',
            objectFit: 'contain',
            mb: 10
          }}
        />
      </Box>
      <Text
        variant='text.h7'
        sx={{ textAlign: 'center', mb: 5 }}
      >
        {item.heading}
      </Text>
      <Text
        sx={{
          textAlign: 'center',
          mb: 13,
          height: '50px',
          maxWidth: '210px'
        }}
      >
        {item.text}
      </Text>
      <BookNowButton
        title={item.button?.title}
        url={item.button?.url}
      />
    </FlexCol>
  )
}

RecsItem.displayName = 'RecsItem';