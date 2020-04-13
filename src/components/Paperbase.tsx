import React from 'react';
import {
  createStyles,
  ThemeProvider,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { INavigatorLink } from './Navigator';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import WorkIcon from '@material-ui/icons/Work'; // work experience

import theme from '../themes/paperbaseTheme'; // MUI theme

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
});

export interface PaperbaseProps extends WithStyles<typeof styles>{
  children?: React.ReactNode;
}

function Paperbase(props: PaperbaseProps) {
  const { classes, children, ...other } = props;
  const [ mobileOpen, setMobileOpen ] = React.useState(false);
  const [ activeLink, setActiveLink ] = React.useState({ id: 'Experience', icon: <WorkIcon />, content: <Content dataType="work" />});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = (navLink: INavigatorLink) => {
    setActiveLink(navLink);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              onLinkClick={handleLinkClick}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              onLinkClick={handleLinkClick}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header toolbarHeading={activeLink.id} onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>
              {activeLink.content}
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Paperbase);
