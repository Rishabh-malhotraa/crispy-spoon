/* eslint-disable no-console */
import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      background: 'tranparent',
    },
    buttonBox: {
      position: 'absolute',
      display: 'inline-block',
      zIndex: 1,
    },
    positionLeft: {
      left: '16px',
    },
    positionRight: {
      right: '16px',
    },
    button: {
      margin: '16px',
    },
  })
);

const QVP = () => {
  const classes = useStyles();
  const handleNext = () => {
    console.log('hi');
    return <Redirect to="/model-specification/KPI" />;
  };
  const handleBack = () => {
    console.log('hi');
  };
  return (
    <div>
      <Box className={`${classes.buttonBox} ${classes.positionLeft}`}>
        <Button
          variant="text"
          size="large"
          color="inherit"
          onClick={handleBack}
          // disabled={activeStep === 0}
          className={classes.button}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Box>
      <Box className={`${classes.buttonBox} ${classes.positionRight}`}>
        <Button
          variant="text"
          size="large"
          color="inherit"
          onClick={handleNext}
          // disabled={(activeStep === 1 }
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default QVP;
