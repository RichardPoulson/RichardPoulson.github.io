/**
 * @author Richard Poulson
 * @version 0.1.0
 * Wrap MUI's link definition around Gatsby's definition.
 */

import React, { Ref, ReactElement } from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

export interface LinkProps {
  children?: React.ReactNode;
  to: string;
}

const Link = React.forwardRef((props: LinkProps, ref) => (
  <MuiLink component={GatsbyLink} innerRef={ref} {...props} >
    {props.children}
  </MuiLink>
));

export default Link;