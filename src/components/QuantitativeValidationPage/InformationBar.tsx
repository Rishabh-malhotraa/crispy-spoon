import React from 'react';
import Grid from '@material-ui/core/Grid';
import DropDown from 'components/Helper/DropDown';
import InfoIcon from 'components/Helper/InfoIcon';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectModelName } from 'redux/slices/modelNameSlice';
import { selectForm } from 'redux/slices/formSlice';

const useStyles = makeStyles({
  root: {
    fontSize: '20px',
    color: 'rbga(0,0,0,0.7)',
    margin: '1rem',
    backgroundColor: 'transparent',
    // '& span.margin': {
    //   marginLeft: '1rem',
    //   marginRight: '1rem',
    // },
    // '& .MuiSelect-root': {
    //   paddingTop: '2px',
    //   paddingBottom: '2px',
    // },
    '.& MuiAppBar-root': {
      zIndex: '100',
    },
  },
  toolbar: {
    position: 'sticky',
    '.& border': {
      border: '1px solid grey',
    },
  },
});
const options = ['One', 'Two', 'Three'];
const InformationBar = (): JSX.Element => {
  const classes = useStyles();
  const modelName = useSelector(selectModelName);
  const { portfolio, productName, developmentObservationWindow } = useSelector(selectForm);

  return (
    <div className={classes.root}>
      <Box className={classes.toolbar}>
        <Grid item container justify="space-around" alignItems="center" className={classes.root}>
          <span className="border">
            Model Name:
            {modelName}
          </span>
          <span className="border">
            Product:
            {productName}
          </span>
          <span className="border">
            Portfolio:
            {portfolio}
          </span>
          <span className="border">
            Date of Development:
            {developmentObservationWindow}
          </span>
        </Grid>
        <Grid item container justify="space-around" alignItems="center" className={classes.root}>
          <span className="border">Model Type: Stress Testing Model</span>
          <DropDown options={options} variant="filled" inputLabel="Segment" width="20vw" />
          <DropDown options={options} variant="filled" inputLabel="BIS" width="20vw" />
        </Grid>
      </Box>
    </div>
  );
};

export default InformationBar;
