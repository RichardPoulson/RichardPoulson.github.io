/**
 * https://material-ui.com/api/app-bar/
 * 
 */

import React from 'react';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '../components/Link';

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  button: {
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(0, 0.5),
    '&:hover': {
      padding: theme.spacing(0.25, 1.75),
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: { display: 'block' },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // https://material-ui.com/api/app-bar/#props
  return (
    <AppBar className={classes.root} position='sticky'>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Richard Poulson
        </Typography>
        <Button color="inherit" className={classes.button}>Login</Button>
        <Button color="inherit" className={classes.button}>LinkedIn</Button>
        <Button color="inherit" className={classes.button}>Save</Button>
        <Button color="inherit" className={classes.button}>GitHub</Button>
        <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        title='"A JavaScript library for building user interfaces"'>
          <Typography variant="body1">
            <Img fixed={data.file.childImageSharp.fixed} />
              GitHub
            </Typography>
          </a>
          <Link to="/page-2" color="inherit" state={{ }}>
              
          </Link>
        </Toolbar>
      </AppBar>
  );
}
