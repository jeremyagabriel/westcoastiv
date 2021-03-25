/** @jsx jsx */
import { useState } from 'react';
import { jsx, Text, Input, Box } from 'theme-ui';
import { FlexCol } from '../Components';
import { formFields, blankForm } from './form';


export const FormFooter = ({
  ...props
}) => {
  const [form, setForm] = useState(blankForm);

  return (
    <FlexCol
      data-comp={FormFooter.displayName}
      id='contact'
      sx={{
        position: 'absolute',
        width: '290px',
        height: '400px',
        bottom: 22,
        right: 20,
        bg: 'white',
        borderRadius: '6px',
        boxShadow: '0px -3px 17px rgba(0, 0, 0, 0.08)',
        p: 14
      }}
      {...props}
    >
      <Box
        id='contact-anchor'
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
          mb: 22
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

      <Text
        variant='buttons.primary'
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 12,
          fontSize: 2,
          py: 5,
          cursor: 'pointer'
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
  fontSize: 2,
  letterSpacing: '0.03em',
  pb: '5px',
  border: 0,
  borderBottom: '1px solid #0A2A42',
  mb: '60px',
  borderRadius: 0,
  outline: 0,
  height: 'auto',
  px: 0,
  'webkitTextFillColor': 'white !important',
  '&::placeholder': {
    color: 'B2'
  }
};

FormFooter.displayName = 'FormFooter';