import { createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a349a4',
    },
    secondary: blue,
    type: 'dark',
  },
});
theme.overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        height: '100vh',
      },
    },
  },
  MuiLink: {
    root: {
      color: theme.palette.primary.main,
    },
  },
  MuiButton: {
    root: {
      textTransform: 'initial',
    },
  },
};

export { theme };
