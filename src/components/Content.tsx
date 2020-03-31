import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import CustomizedCard from './CustomizedCard';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  });

export interface ContentProps extends WithStyles<typeof styles> {
  dataType: string;
}

function Content(props: ContentProps) {
  const { classes } = props;
  var workExperience = require('../json/work-data.json');
  var education = require('../json/education-data.json');
  var projects = require('../json/project-data.json');

  return (
    <Container className={classes.cardGrid}>
      <Grid container direction="row" justify="space-evenly" alignItems="baseline" spacing={2}>
        {props.dataType == "work" && workExperience.map((item) => (
          <Grid item key={item} xs={12} sm={9} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              header={item.header}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
            />
          </Grid>
        ))}
        {props.dataType == "education" && education.map((item) => (
          <Grid item key={item} xs={12} sm={9} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              header={item.header}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
            />
          </Grid>
        ))}
        {props.dataType == "projects" && projects.map((item) => (
          <Grid item key={item} xs={12} sm={9} md={6}>
            <CustomizedCard
              avatar={item.avatar}
              header={item.header}
              subheader={item.subheader}
              summary={item.summary}
              details={item.details}
              list={item.list}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(Content);