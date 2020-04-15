/**
 * @author Richard Poulson
 * @version 0.1.0
 */

import React from 'react';
import clsx from 'clsx';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Omit } from '@material-ui/types';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment'; // projects
import SchoolIcon from '@material-ui/icons/School'; // education
import WorkIcon from '@material-ui/icons/Work'; // work experience

import Content from './Content';
import WorkContent from './WorkContent';
import styles from '../styles/navigatorStyles';

export interface INavigatorLink {
  id: string;
  icon: JSX.Element;
  content: JSX.Element;
  active?: boolean;
}

// 'classes' used with Navigator component, other Drawer props assigned to Drawer. 
export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {
  onLinkClick: (content: INavigatorLink) => void;
  imageMap?: Map<string, string>;
  queryData?: Object;
}

function Navigator(props: NavigatorProps) {
  const { classes, imageMap, queryData: data, onLinkClick, ...other } = props;
  const [ activeLinkItem, setActiveLinkItem ] = React.useState('Experience')
  const handleListItemClick = (item: INavigatorLink) => {
    setActiveLinkItem(item.id)
    props.onLinkClick(item)
  };

  let categories = [
    {
      id: 'History',
      children: [
        { id: 'Experience', icon: <WorkIcon />, content: <WorkContent queryData={data} imageMap={imageMap} />},
        { id: 'Education', icon: <SchoolIcon />, content: <Content imageMap={imageMap} dataType="education" />},
        { id: 'Projects', icon: <AssignmentIcon />, content: <Content imageMap={imageMap} dataType="projects" />},
      ],
    },
  ];

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <Typography variant="h6">
            Richard Poulson
          </Typography>
        </ListItem>
        <Divider variant='middle'/>
        {/* For each link category in the categories object, map to a ListItemText. */
        categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText classes={{ primary: classes.categoryHeaderPrimary, }} >
                {id}
              </ListItemText>
            </ListItem>
              {/* For link in a link category, map to a ListItemIcon and a ListItemText, setting onClick to onLinkClick prop. */
              children.map(({ id: childId, icon: childIcon, content: childContent, active }) => (
                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}
                  onClick={() => handleListItemClick({id: childId, icon: childIcon, content: childContent})}
                  selected={activeLinkItem == childId}
                >
                  <ListItemIcon className={classes.itemIcon}>{childIcon}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemPrimary, }} >
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);
