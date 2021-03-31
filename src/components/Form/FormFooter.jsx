/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Text, Input, Box, Spinner } from 'theme-ui';
import { ImCheckmark } from 'react-icons/im';
import { FlexCol, Flex } from '../Components';
import { formFields } from './form';
import { FormSubmit } from './FormSubmit';


export const FormFooter = ({
  handleOnSubmit,
  loading,
  submitted,
  ...props
}) => {

  return (
    <FlexCol
      data-comp={FormFooter.displayName}
      sx={{
        width: '290px',
        height: 'auto',
        mt: [0, null, '-150px', '-220px', '-150px'],
        bg: 'white',
        borderRadius: '6px',
        boxShadow: '0px -3px 17px rgba(0, 0, 0, 0.08)',
        p: '27px'
      }}
      {...props}
    >
      <Box
        id='contact'
        sx={{
          height: '1px',
          width: '1px',
          visibility: 'hidden',
          position: 'absolute',
          left: 0,
          top: ['-84px', '-100px']
        }}
      />
      <Text
        sx={{
          fontFamily: 'Tungsten, sans-serif',
          fontWeight: 600,
          color: 'B2',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          mb: 10
        }}
      >
        Contact Us
      </Text>

      <Box
          as='form'
          onSubmit={handleOnSubmit}
          sx={{ width: '100%' }}
        >
          <Flex>
            { formFields.slice(0,2).map((field, index) => (
                <Input
                  key={field.key}
                  sx={{
                    ...textFieldSx,
                    flex: 1,
                    mr: index === 0 ? 6 : 0,
                  }}
                  type={field.type}
                  placeholder={field.label}
                  name={field.key}
                  required
                />
            ))}
          </Flex>
          { formFields.slice(2, formFields.length).map(field => (
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
          <FormSubmit
            loading={loading}
            submitted={submitted}
          />
        </Box>
    </FlexCol>
  );
};

const fontSx = {
  color: 'B2',
  fontFamily: 'Tungsten, sans-serif',
  fontWeight: 600,
  fontSize: 2,
  letterSpacing: '0.03em',
};

const textFieldSx = {
  ...fontSx,
  pb: '5px',
  border: 0,
  borderBottom: '1px solid #0A2A42',
  mb: '26px',
  borderRadius: 0,
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
  p: 5,
  mb: '26px'
};

FormFooter.displayName = 'FormFooter';