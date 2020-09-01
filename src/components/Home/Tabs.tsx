/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'sticky',
    color: 'white',
    // background: '#E6E6E6',
    background: '#254E70',
    // background: 'rgba(255,255,255,.1)',
    'backdrop-filter': 'saturate(180%) blur(20px)',
    blur: '8px',
  },
});

export default function CenteredTabs(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar className={classes.root} elevation={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          centered
        >
          <Tab label="Model Setup" />
          <Tab label="Performance Summary" />
          <Tab label="Quantitative Validation" />
          <Tab label="Qualitative Validation" />
          <Tab label="Model Documentation" />
        </Tabs>
      </AppBar>
      {value === 0 && <Redirect to="/model-setup" />}
      {value === 2 && <Redirect to="/quanitative-validation" />}
    </>
  );
}
