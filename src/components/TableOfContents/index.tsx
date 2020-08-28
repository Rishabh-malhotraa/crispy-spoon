import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { v1 as uuid } from 'uuid';
import { grey } from '@material-ui/core/colors';

const text = [
  'Performance Summary',
  'High Level Model',
  'Decile Level Model Level Tests',
  'Factor Level Test',
];

const useStyles = makeStyles({
  root: {
    // backgroundColor: grey[800],
    display: 'inline-block',
    position: 'fixed',
    right: '0px',
    padding: '3rem 2rem 0rem 1rem',
  },
  text: {
    color: '#2196f3',
  },
});

const TableOfContents = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        {text.map((element) => (
          <ListItem button key={uuid()}>
            <ListItemText primary={element} style={{ color: grey[500] }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TableOfContents;
