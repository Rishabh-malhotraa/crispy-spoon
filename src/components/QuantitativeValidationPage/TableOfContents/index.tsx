import React, { useState } from 'react';
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

const intitalState = text.map(() => false);

const useStyles = makeStyles({
  root: {
    // backgroundColor: grey[800],
    display: 'inline-block',
    maxWidth: '200px',
    position: 'fixed',
    right: '0px',
    padding: '3rem 1rem 0rem 1rem',
  },
  text: {
    color: grey[500],
    '& .MuiTypography-root': {
      fontSize: '14px',
    },
  },
  buttonClicked: {
    borderLeft: '3px solid black',
    '& .MuiListItemText-root': {
      color: '#000',
    },
  },
});

const TableOfContents = (): JSX.Element => {
  const classes = useStyles();
  const [click, setClick] = useState<boolean[]>(intitalState);

  const handleClick = (index: number) => {
    const newArray = intitalState.slice();
    newArray[index] = true;
    setClick(newArray);
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        {text.map((element, index) => (
          <ListItem
            button
            key={uuid()}
            onClick={() => handleClick(index)}
            className={click[index] ? classes.buttonClicked : ''}
          >
            <ListItemText className={classes.text} primary={element} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TableOfContents;
