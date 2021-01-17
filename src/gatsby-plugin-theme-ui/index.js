export default {
  colors: {
    text: '#747474',
    background: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    primary: '#00AEEF',
    secondary: '#005796',
  },
  breakpoints: [
    "480px",
    "600px",
    "768px",
    "992px",
    "1280px",
    "1440px"
  ],
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  fontWeights: {
    "thin": 100,
    "light": 300,
    "regular": 400,
    "semi": 500,
    "bold": 700,
    "black": 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'regular',
      fontSize: 2,
      color: 'black',
    },
    h1: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 5,
      color: 'black',
    },
    h2: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 4,
      color: 'black',
    },
    h3: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 3,
      color: 'black',
    },
    h4: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 2,
      color: 'black',
    },
    h5: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 1,
      color: 'black',
    },
    h6: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 0,
      color: 'black',
    },
  },
  buttons: {
    primary: {
      bg: 'transparent',
      border: '2px solid',
      borderColor: 'primary',
      p: 1,
      color: 'black',
      display: 'flex',
      cursor: 'pointer',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 1,
      letterSpacing: '.5px',
      outline: 'none',
      transition: 'all .15s ease-in',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      position: 'relative',
    },
    secondary: {
      color: 'text',
      // bg: 'secondary',
    },
    navbar: {
      fontFamily: 'heading',
      color: 'black',
      p: 1,
      fontSize: 2,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      transition: '0.2s',
      '&:hover': {
        color: 'secondary',
        transition: '0.2s',
      }
    }
  },
  space: [
    0,
    8,
    16,
    24,
    32,
    40,
    48,
    56,
    64,
    72,
    80,
    88,
    96,
  ],
}