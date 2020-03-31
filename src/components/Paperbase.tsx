import React from 'react';
import {
  createMuiTheme,
  responsiveFontSizes,
  createStyles,
  ThemeProvider,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import MiniDrawer from './MiniDrawer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#67d0ff',
      main: '#009ff7',
      dark: '#0071c4',
    },
    secondary: {
      light: '#ffe24b',
      main: '#f9b000',
      dark: '#c18100',
    }
  },
  typography: {
    fontFamily: 'Avenir, sans-serif',
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
    MuiCardHeader: {
      root: {
        backgroundColor: theme.palette.secondary.light,
      },
      title: {
        'text-align': 'center',
      },
      subheader: {
        'text-align': 'center',
      },
      avatar: {
        minWidth: 48,
        minHeight: 48,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.0)',
      },
    },
    MuiDrawer: {
      paper: {
        backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.light}, ${theme.palette.primary.main} , ${theme.palette.primary.dark})`,
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiListItem: {
      gutters: {
        padding: theme.spacing(0.25),
      },
    },
    MuiListItemText: {
      root: {
        '&:hover': {
          fontWeight: theme.typography.fontWeightBold,
        }
      },
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
      secondary: {},
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
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
  },
};

theme = responsiveFontSizes(theme);

const drawerWidth = 288;

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 'auto', //width: drawerWidth,
    },
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
  },
  footer: {
    padding: theme.spacing(2),
  },
});

export interface PaperbaseProps extends WithStyles<typeof styles> {}

function Paperbase(props: PaperbaseProps) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        {/* <nav className={classes.drawer}> */}
          <Hidden smUp implementation="js">
            <MiniDrawer />
          </Hidden>
          <Hidden xsDown implementation="js">
            <MiniDrawer />
          </Hidden>
        {/* </nav> */}
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Paperbase);
