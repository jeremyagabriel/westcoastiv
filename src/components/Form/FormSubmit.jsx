/** @jsx jsx */
import { jsx, Text, Spinner } from 'theme-ui';
import { ImCheckmark } from 'react-icons/im';


export const FormSubmit = ({
  loading,
  submitted,
  spinnerWidth = '20px',
  checkSize = '16px',
  ...props
}) => {

  return (
    <Text
      data-comp={FormSubmit.displayName}
      as='button'
      type='submit'
      variant='buttons.primary'
      sx={{
        mx: 'auto',
        width: '126px',
        height: '38px',
        fontSize: 2,
        lineHeight: '38px',
        py: 0,
        position: 'relative',
        cursor: loading || submitted ? 'default' : 'pointer',
        transition: '0.2s',
        bg: submitted ? 'P2' : 'P3',
        borderColor: submitted ? 'P2' : 'P3',
        '&:hover': {
          bg: submitted ? 'P2' : '#0da6e1',
          borderColor: submitted ? 'P2' : '#0da6e1'
        }
      }}
      {...props}
    >
      { loading
          ? <Spinner
              sx={{
                width: spinnerWidth,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          : submitted
              ? <ImCheckmark
                  style={{
                    fontSize: checkSize,
                    color: 'white',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              : 'Send Message'
      }
    </Text>
  );
};

FormSubmit.displayName = 'FormSubmit';