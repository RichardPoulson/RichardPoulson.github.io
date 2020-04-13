/** @file TypeScript definition of the CustomizedCard function component.
 * @author Richard Poulson <contact@richardpoulson.com>
 * @version 0.1.0
 */

import clsx from 'clsx'; // "A tiny (229B) utility for constructing className strings conditionally."
import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Tooltip,
  Typography,
  Zoom
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/** 
 * Create style for CustomizedCard and its children.
 * 
 * @see {@link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMuiTheme.js}
 * @see {@link https://material-ui.com/guides/typescript/#usage-of-withstyles Usage of withStyles - TypeScript - Material-UI}
 * */
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

/** Props that a CustomizedCard component can accept. */ 
export interface ContentProps extends WithStyles<typeof styles> {
  action?: React.ReactNode,
  avatar?: React.ReactNode,
  header: string,
  media?: any,
  subheader?: string,
  summary: string,
  details?: Array<string>,
  list?: Array<string>,
  links?: Array<React.ReactFragment>,
  raised?: Boolean
};

/**
 * Returns a customized Material-UI Card function component.
 * 
 * @param {ContentProps} props - Props object
 * @param {React.ReactNode} [props.action] - Action card should take when triggered
 * @param {React.ReactNode} [props.avatar] - Material-UI Avater component
 * @param {string} props.header
 * @param {*} [props.media]
 * @param {string} [props.subheader]
 * @param {string} props.summary - Summary of card's focus.
 * @param {Array<string>} [props.details] - Details (paragraphs) 
 * @param {Array<string>} [props.list] - List of items
 * @param {Array<React.ReactFragment>} [props.links] - Related hyperlinks
 * @param {Boolean} [props.raised] - Is the card raised?
 * 
 * @see {@link https://material-ui.com/components/cards/ Card React component - Material-UI}
 * @todo Define type for CustomizedCard.
 * @todo Define how media is handled.
 */
function CustomizedCard(props: ContentProps) {
  const { classes } = props;
  /** @see {@link https://reactjs.org/docs/hooks-overview.html} */
  const [ expanded, setExpanded ] = React.useState(false);

  /** Triggered when expand button is clicked. */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={props.avatar}
        title={props.header}
        subheader={props.subheader}
        titleTypographyProps={{ variant: 'h6' }}
        subheaderTypographyProps={{ variant: 'subtitle1' }}
      />
      <CardContent className={classes.supporting}>
        <Typography variant="body1" className={classes.supporting}>
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions>
        {/* If Card has details or a list, show expand button. */
        (props.details || props.list) &&
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
            {/* If card has details, return them. */
            props.details &&
              props.details.map((item) => (
                <p key={item}>{item}</p>
              ))
            }
            {/* If card has list of items, return them. */
            props.list &&
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
