/** @jsx jsx */
import { Fragment, useEffect } from 'react';
import { jsx, Text, Input, Box } from 'theme-ui';
import { disableBodyScroll } from 'body-scroll-lock';
import { FlexCol } from '../Components';
import { formFields } from './form';


export const FormMobile = ({
  handleOnSubmit,
  loading,
  ...props
}) => {

  useEffect(() => {
    const el = document.querySelector('#form-menu');
    disableBodyScroll(el);
  }, []);

  return (
    <FlexCol
      data-comp={FormMobile.displayName}
      id='form-menu'
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        width: '100vw',
        background: 'white',
        zIndex: 6,
        overflowY: 'scroll',
        justifyContent: 'flex-end',
        alignItems: 'center',
        py: ['100px', '120px'],
        px: 15
      }}
      {...props}
    >
      <FlexCol
        sx={{
          // alignItems: 'center',
          // justifyContent: 'space-between',
          height: '100%',
          width: '100%',
        }}
      >
        <Text
          sx={{
            fontFamily: 'Tungsten, sans-serif',
            fontWeight: 600,
            color: 'B2',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            mb: '50px',
          }}
        >
          Contact Us
        </Text>

        <Box
          as='form'
          onSubmit={handleOnSubmit}
          sx={{ width: '100%' }}
        >
          { formFields.map(field => (
              field.key === 'message'
                ? <Fragment key={field.key}>
                    <Text
                      sx={{
                        ...fontSx,
                        pb: '5px',
                      }}
                    >
                      {field.label}
                    </Text>
                    <Text
                      as='textarea'
                      sx={textAreaSx}
                      type={field.type}
                      name={field.key}
                      required
                    />
                  </Fragment>
                : <Input
                    key={field.key}
                    sx={textFieldSx}
                    type={field.type}
                    placeholder={field.label}
                    name={field.key}
                    required
                  />
          ))}
          <Text
            as='button'
            type='submit'
            variant='buttons.primary'
            sx={{
              mx: 'auto',
              mt: 20,
              mb: 16
            }}
          >
            Send Message
          </Text>
        </Box>
      </FlexCol>
    </FlexCol>
  );
};

const fontSx = {
  color: 'B2',
  fontFamily: 'Tungsten, sans-serif',
  fontWeight: 600,
  fontSize: 3,
  letterSpacing: '0.03em',
};

const textFieldSx = {
  ...fontSx,
  pb: '5px',
  border: 0,
  borderBottom: '1px solid #0A2A42',
  mb: '60px',
  borderRadius: 0,
  border: '0px',
  outline: 0,
  height: 'auto',
  px: 0,
  'webkitTextFillColor': 'white !important',
  '&::placeholder': {
    color: 'B2'
  }
};

const textAreaSx = {
  ...fontSx,
  width: '100%',
  height: '120px',
  resize: 'none',
  outline: 'none',
  border: '1px solid #0A2A42',
  borderRadius: '5px',
  p: 5
};

FormMobile.displayName = 'FormMobile';