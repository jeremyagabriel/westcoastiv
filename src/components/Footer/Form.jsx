/** @jsx jsx */
import { useState } from 'react';
import { jsx, Text, Input } from 'theme-ui';
import { FlexCol } from '../Components';

const formFields = [
  {
    key: 'first',
    label: 'First name',
    type: 'text'
  },
  {
    key: 'last',
    label: 'Last name',
    type: 'text'
  },
  {
    key: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    key: 'message',
    label: 'Message',
    type: 'text'
  }
];

const blankForm = {
  first: '',
  last: '',
  email: '',
  message: ''
};


export const Form = () => {
  const [form, setForm] = useState(blankForm);

  return (
    <FlexCol
      data-comp={Form.displayName}
      id='contact'
      sx={{
        position: 'absolute',
        width: '400px',
        height: '650px',
        bottom: 12,
        right: 10,
        bg: 'white',
        borderRadius: '6px',
        boxShadow: '0px -3px 17px rgba(0, 0, 0, 0.08)',
        p: 4
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
          mb: 12
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
          bottom: 3,
          fontSize: '16px',
          py: '10px',
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
  fontSize: '16px',
  letterSpacing: '0.03em',
  pb: '5px',
  boxShadow: '0 0.5px 0 #0A2A42',
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

Form.displayName = 'Form';