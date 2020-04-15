/**
 * @author Richard Poulson
 * @version 0.1.0
 * @todo Refactor how activeLink state in Paperbase is initialized.
 * @todo Refactor how styles are imported so that drawerWidth doesn't have to be defined in both files.
 * @todo Figure out why IDE reports that it can't find member ThemeProviderProps (but builds/runs successfully).
 */

import React from 'react';
import {
  ThemeProviderProps,
  ThemeProvider,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import WorkIcon from '@material-ui/icons/Work';

import { INavigatorLink } from './Navigator';
import Navigator from './Navigator';
import WorkContent from './WorkContent';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/paperbaseStyles';
const drawerWidth = 240;

export interface PaperbaseProps extends Omit<ThemeProviderProps, 'classes'>, WithStyles<typeof styles>{
  imageMap?: Map<string, string>;
  queryData?: Object;
}

/**
 * Material-UI (React) function component, returns Header, Navigator, and Copyright. 
 * @param props - Properties for this compponent.
 * @param props.classes - CSS classes of the MUI styles defined for this component.
 * @param props.children - Children React nodes of this function component.
 * @param props.theme - MUI theme to be used for the ThemeProvider.
 * @param [props.imageMap] - Map from image filenames to optimized Gatsby object components.
 * @param [props.queryData] - Data returned from a GraphQL query. 
 * @see {@link https://material-ui.com/styles/advanced/#theming Theming - Advanced - Material-UI}
 */
function Paperbase(props: PaperbaseProps) {
  const { classes, children, imageMap, queryData: data, theme, ...other } = props;
  const [ mobileOpen, setMobileOpen ] = React.useState(false);
  const [ activeLink, setActiveLink ] = React.useState({ id: 'Experience', icon: <WorkIcon />, content: <WorkContent queryData={data} imageMap={imageMap} />});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = (navLink: INavigatorLink) => {
    setActiveLink(navLink);
  }

  return (
    <ThemeProvider {...other} theme={theme}>
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
              imageMap={props.imageMap}
              queryData={data}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              onLinkClick={handleLinkClick}
              imageMap={props.imageMap}
              queryData={data}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header
            toolbarHeading={activeLink.id}
            onDrawerToggle={handleDrawerToggle}
          />
          <main className={classes.main}>
            {activeLink.content}
          </main>
          <Footer
            className={classes.footer}
            variant="body1"
            color="textSecondary"
            align="center"
            author={data.site.siteMetadata.author}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Paperbase);
