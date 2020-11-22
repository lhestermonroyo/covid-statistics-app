import { createMuiTheme, useTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)',
      },
      colorPrimary: {
        backgroundColor: '#FFFFFF'
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)',
        border: '1px solid #E6E6E6',
      }
    },
    MuiCardContent: {
      root: {
        padding: '2em'
      }
    },
    MuiInputBase: {
      input: {
        lineHeight: 1
      }
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        fontWeight: 600
      },
      contained: {
        boxShadow: 'none'
      }
    },
    MUIDataTable: {
      root: {},
      paper: {
        boxShadow: 'none',
        marginBottom: 8
      }
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#6D71F9'
    },
    secondary: {
      main: '#FFFFFF'
    }
  }
});

export default theme;
