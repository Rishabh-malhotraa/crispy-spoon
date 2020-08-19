import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'sticky',
    background: 'rgba(255,255,255,.1)',
    'backdrop-filter': 'saturate(180%) blur(20px)',
    blur: '8px',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.root} elevation={1}>
      <Tabs
        value={value}
        positon="fixed"
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="Model Setup" />
        <Tab label="Performance Summary" />
        <Tab label="Quantitative Validation" />
        <Tab label="Qualitative Validation" />
        <Tab label="Model Documentation" />
      </Tabs>
    </AppBar>
  );
}
