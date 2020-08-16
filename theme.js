import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#a01',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  props: {
    MuiButton: {
      disableFocusRipple: 'false',
    },
  },
});

export default theme;
