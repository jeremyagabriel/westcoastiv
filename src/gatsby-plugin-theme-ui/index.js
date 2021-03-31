export default {
  colors: {
    text: '#0A2A42',
    background: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    P1: '#175E95', //blue
    P2: '#10EEBD', //mint
    P3: '#10b0ee', //lightblue
    P4: '#171F95', //royalblue
    S1: '#17958D', //green
    S2: '#ECF0F3', //lightgray
    S3: '#C5D8E8', //cloudblue
    S4: '#73A9D4', //skyblue
    B1: '#003057', //darkblue
    B2: '#0A2A42', //blueblack
    BR1: '#EEEBE3', //canvas
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
    heading: 'Tungsten Narrow, sans-serif',
  },
  fontWeights: {
    "thin": 100,
    "light": 300,
    "regular": 400,
    "medium": 500,
    "semi": 600,
    "bold": 700,
    "black": 900
  },
  lineHeights: {
    body: 1.25,
    heading: 1,
  },
  letterSpacings: {
    body: '0.05em',
    heading: '0em',
  },
  fontSizes: [
    12, //0
    14, //1
    16, //2
    20, //3
    24, //4
    36, //5
    48, //6
    64, //7
    72, //8
    84, //9
    96 //10
  ],
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'light',
      fontSize: 1,
      color: 'text',
      lineHeight: 'body',
    },
    h1: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: 10,
      color: 'B1',
    },
    h2: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: 9,
      color: 'B1',
    },
    h3: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: 8,
      color: 'B1',
    },
    //64px
    h4: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: 7,
      color: 'B1',
    },
    //48px
    h5: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
      fontSize: 6,
      color: 'B1',
    },
    h5Italic: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      fontSize: [5, null, 6],
      color: 'B1',
      transform: 'skew(-4deg, -4deg) rotate(4deg)',
      textAlign: 'center',
    },
    //36px
    h6: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      fontSize: 5,
      color: 'B1',
    },
    //24px
    h7: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semi',
      lineHeight: 'heading',
      letterSpacing: '0.03em',
      fontSize: 4,
      color: 'P1',
    },
    '20': {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'regular',
      lineHeight: 'heading',
      letterSpacing: '0.03em',
      fontSize: 3,
      color: 'P1',
    },

  },
  buttons: {
    primary: {
      bg: 'P3',
      border: '1px solid',
      borderColor: 'P3',
      fontFamily: 'heading',
      pt: '11px',
      pb: '8px',
      px: '30px',
      color: 'white',
      display: 'flex',
      cursor: 'pointer',
      borderRadius: '5px',
      // textTransform: 'uppercase',
      fontWeight: 'semi',
      lineHeight: 'heading',
      fontSize: 4,
      letterSpacing: 'body',
      outline: 'none',
      transition: 'all .1s ease-in',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      position: 'relative',
      boxShadow: '0px 4px 17px rgba(23, 94, 149, 0.39)',
      '&:hover': {
        bg: '#0da6e1',
        borderColor: '#0da6e1'
      }
    },
    secondary: {
      color: 'text',
    },
    navbar: {
      fontFamily: 'heading',
      color: 'B2',
      fontSize: 4,
      letterSpacing: 'body',
      fontWeight: 'semi',
      cursor: 'pointer',
      // fontStyle: 'italic'
      // transition: '0.2s',
      // '&:hover': {
      //   color: 'black',
      //   transition: '0.2s',
      // }
    }
  },
  space: [
    0, //0
    2, //1
    4, //2
    6, //3
    8, //4
    10, //5
    12, //6
    14, //7
    16, //8
    18, //9
    20, //10
    22, //11
    24, //12
    30, //13
    32, //14 (4)
    40, //15
    48, //16
    56, //17
    64, //18
    72, //19
    80, //20
    88, //21
    96, //22
    104, //23
    112, //24
    120, //25
    128, //26
    150, //27
    200, //28
    250, //29
    300, //30
  ],
}