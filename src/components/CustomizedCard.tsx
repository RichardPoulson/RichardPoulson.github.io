import clsx from 'clsx'; // "A tiny (229B) utility for constructing className strings conditionally."
import React from 'react';
import { WithStyles, withStyles, createStyles, useTheme, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '600px',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandButton: {
      [theme.breakpoints.down('sm')]: {
        width: '32px',
        height: '32px',
      },
      [theme.breakpoints.up('md')]: {
        width: '48px',
        height: '48px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '64px',
        height: '64px',
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    supporting: {
      display: 'flex',
      margin: 'auto',
      alignItems: 'center',
      alignSelf: 'center',
    }
  });

// Extend WithStyles interface to also include properties for customized card.
export interface ContentProps extends WithStyles<typeof styles> {
  action?: React.ReactNode,
  avatar?: React.ReactNode,
  header: string,
  media?: any,
  subheader?: string,
  summary: string,
  details?: Array<string>,
  list?: Array<string>, // list of detail items for the card
  links?: Array<React.ReactFragment>,
  raised?: Boolean
};

function CustomizedCard(props: ContentProps) {
  const { classes } = props;
  const [ expanded, setExpanded ] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={props.avatar}
        title={props.header}
        subheader={props.subheader}
      />
      <CardContent className={classes.supporting}>
        <Typography variant="body1" className={classes.supporting}>
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions>
        {/* If Card has additional details, show expand button. */}
        {(props.details || props.list) &&
          <Tooltip
            arrow
            title={expanded ? "Hide Details" : "Show Details"}
            TransitionComponent={Zoom}
          >
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              }, classes.expandButton)}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              color="secondary"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Tooltip>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {props.details &&
              props.details.map((item) => (
                <p key={item}>{item}</p>
              ))
            }
            {props.list &&
              <ul>
                {props.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default withStyles(styles)(CustomizedCard);
