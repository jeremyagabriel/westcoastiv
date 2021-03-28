/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { useMemo } from 'react';
import { FlexCol } from '../Components';


export const QuoteItem = ({ content }) => {

  const quote = useMemo(() => {
    const splitQuote = content?.text?.text?.split('<br>');
    return {
      text: splitQuote?.[0]?.trim(),
      label: splitQuote?.[1]?.trim()
    }
  }, [content]);

  return (
    <FlexCol
      data-comp={QuoteItem.displayName}
      sx={{
        width: '100%',
        // maxWidth: '440px',
        // mx: 22,
        alignItems: 'center',
        cursor: 'default',
      }}
    >
      <Text
        variant='text.h6'
        sx={{
          fontSize: [4, null, 5],
          color: 'white',
          textAlign: 'center',
          textTransform: 'none',
          width: '100%',
          maxWidth: ['380px', null, '435px'],
        }}
      >
        {quote.text}
      </Text>
      <Text
        variant='text.h7'
        sx={{
          color: 'white',
          fontSize: '16px',
          fontWeight: 'medium',
          mt: 8
        }}
      >
        - {quote.label}
      </Text>
    </FlexCol>
  )
}

QuoteItem.displayName = 'QuoteItem';