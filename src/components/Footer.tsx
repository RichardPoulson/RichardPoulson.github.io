/**
 * @author Richard Poulson <contact@richardpoulson.com>
 * @version 0.1.0
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer <footer> - HTML: Hypertext Markup Language | MDN}
 */

import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

/** @see {@link https://material-ui.com/guides/typescript/#using-createstyles-to-defeat-type-widening Using createStyles to defeat type widening | Material-UI} */
const styles = (theme: Theme) =>
  createStyles({
    root: {}
  });

interface FooterProps extends WithStyles<typeof styles> {
  author: string;
}

function Footer(props: FooterProps) {
  const { classes, author } = props;

  return (
    <footer className={classes.root}>
      © {new Date().getFullYear()}, {author}
    </footer>
  );
}

export default withStyles(styles)(Footer);
