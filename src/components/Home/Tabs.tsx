/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTabIndex } from 'redux/slices/tabIndexSlice';

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    position: 'static',
    color: 'white',
    // background: '#E6E6E6',
    background: '#254E70',
    // background: 'rgba(255,255,255,.1)',
    'backdrop-filter': 'saturate(180%) blur(20px)',
    blur: '8px',
  },
  tabsElement: {
    '& .MuiTab-wrapper': {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      fontSize: '20px',
      '& .MuiSvgIcon-root': {
        fontSize: '50px',
      },
    },
  },
});

export default function CenteredTabs(): JSX.Element {
  const tabIndex = useSelector(selectTabIndex);
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root} elevation={3}>
        <Tabs
          variant="fullWidth"
          className={classes.tabsElement}
          value={tabIndex}
          indicatorColor="secondary"
          centered
        >
          <Tab label="Model Setup" />
          <Tab label="Quantitative Validation" />
          <Tab label="Model Documentation" />
        </Tabs>
      </AppBar>
      {tabIndex === 0 && <Redirect to="/model-setup/KPI" />}
      {tabIndex === 1 && <Redirect to="/quantitative-validation" />}
      {tabIndex === 2 && <Redirect to="/rishabh" />}
    </>
  );
}
