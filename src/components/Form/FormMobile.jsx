/** @jsx jsx */
import { useState } from 'react';
import { jsx, Text, Input } from 'theme-ui';
import { FlexCol } from '../Components';
import { formFields, blankForm } from './form';


export const FormMobile = ({
  ...props
}) => {
  const [form, setForm] = useState(blankForm);

  return (
    <FlexCol
      data-comp={FormMobile.displayName}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100vh',
        width: '100vw',
        background: 'white',
        zIndex: 6,
        overflowY: 'scroll',
        justifyContent: 'flex-end',
        alignItems: 'center',
        pt: '20vh',
        pb: '160px',
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

        { formFields.map((field, index) => (
          <Input
            key={index}
            sx={inputSx}
            value={form[field.key]}
            onChange={e => setForm({
              ...form,
              [field.key]: e.target.value
            })}
            type={field.type}
            placeholder={field.label}
          />
        ))}
      </FlexCol>

      <Text
        variant='buttons.primary'
        sx={{

        }}
      >
        Send Message
      </Text>
    </FlexCol>
  );
};

const inputSx = {
  color: 'B2',
  fontFamily: 'Tungsten, sans-serif',
  fontWeight: 600,
  fontSize: 3,
  letterSpacing: '0.03em',
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

FormMobile.displayName = 'FormMobile';