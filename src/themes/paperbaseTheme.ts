import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green'

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  typography: {
    fontFamily: 'Avenir Next, sans-serif',
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiToolbar: {
      root: {
        margin: theme.spacing(1),
      }
    },
    MuiAppBar: {
      root: {
        backgroundColor: theme.palette.primary.dark,
        //backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
      }
    },
    MuiDrawer: {
      paper: {
        // backgroundColor: theme.palette.primary.main,
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItem: {
      root: {
        color: theme.palette.common.white,
      },
      button: {
        //color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
          backgroundColor: 'rgba(255, 255, 255, 0.32)',
        },
        /*
        '&:active': {
          color: theme.palette.secondary.main,
        },
        */
      },
      selected: {
        // TODO: implement toggling of drawer link component. //color: theme.palette.secondary.main,
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};
theme = responsiveFontSizes(theme);

export default theme;