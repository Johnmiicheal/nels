
import { extendTheme } from '@chakra-ui/react';
import "@fontsource/geist-sans";
import '@fontsource/geist-sans/100.css';
import '@fontsource/geist-sans/200.css';
import '@fontsource/geist-sans/300.css';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/700.css';
import '@fontsource/geist-sans/800.css';
import '@fontsource/geist-sans/900.css';

// Create a theme instance.
const theme = extendTheme({
  fonts: {
    heading: 'Geist Sans',
    body: 'Geist Sans',       
},
components: {
  Button: { baseStyle: {_focus: { boxShadow: 'none'}}},
  Popover: { baseStyle: {_focus: { boxShadow: 'none'}}},
  Drawer: {
    variants: {
      permanent: {
        dialogContainer: {
          width: 0,
        },
      },
    },
  },
},
textStyles: {
  h1: {
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
    _selection:{
      background: '#474747',
      color: '#FFFFFF'
    }
  },
  h2: {
    fontSize: ['36px', '48px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
    _selection:{
      background: '#474747',
      color: '#FFFFFF'
    }
  },
  text: {
    _selection:{
      background: '#474747',
      color: '#FFFFFF'
    }
  }
},


defaultProps: {
  focusBorderColor: '#F4B95F',
},

});

export default theme;
