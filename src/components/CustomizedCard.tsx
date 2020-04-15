/**
 * @author Richard Poulson
 * @version 0.1.0
 */

import clsx from 'clsx'; // "A tiny (229B) utility for constructing className strings conditionally."
import React from 'react';
import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardHeaderProps,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Tooltip,
  Typography,
  Zoom
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from '../styles/customizedCardStyles';

export interface CustomizedCardProps extends Omit<CardHeaderProps, 'classes'>, WithStyles<typeof styles>{
  raised?: Boolean;
  header: string;
  summary: string;
  details?: Array<string>;
  list?: Array<string>;
  media?: string;
}

/**
 * Customized Material-UI Card.
 * @param {Object} props - Properties for this compponent.
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
 */
function CustomizedCard(props: CustomizedCardProps) {
  const { classes } = props;
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
      {/* If card has media prop, return CardMedia component. */
       props.media &&
       <CardMedia
          className={classes.media}
          image={props.media}
        />
      }
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
