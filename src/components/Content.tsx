/**
 * @author Richard Poulson
 * @version 0.1.0
 * @todo Migrate from using this "all-purpose" component to custom components for each topic (e.g. WorkContent).
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import CustomizedCard from './CustomizedCard';

import styles from '../styles/contentStyles';

export interface ContentProps extends WithStyles<typeof styles> {
  dataType: string;
  imageMap?: Map<string, string>;
}

function Content(props: ContentProps) {
  const { classes, imageMap } = props;
  var workExperience = require('../json/work-data.json');
  var education = require('../json/education-data.json');
  var projects = require('../json/project-data.json');

  return (
    <Container className={classes.cardGrid}>
      <Grid container direction="row" justify="space-evenly" alignItems="baseline" spacing={3}>
        {props.dataType == "work" && workExperience.map((item) => (
          <Grid item key={item} xs={12} sm={12} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              header={item.header}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
              media={props.imageMap.get(item.media)}
            />
          </Grid>
        ))}
        {props.dataType == "education" && education.map((item) => (
          <Grid item key={item} xs={12} sm={12} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              header={item.header}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
              media={props.imageMap.get(item.media)}
            />
          </Grid>
        ))}
        {props.dataType == "projects" && projects.map((item) => (
          <Grid item key={item} xs={12} sm={12} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              header={item.header}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
              media={imageMap.get(item.media)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(Content);