import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import { Route, useRouteMatch } from 'react-router-dom';

import labels from './data.js';
import StepperPages from './StepperPages/StepperPages';
import KeyPerformanceIndicatorPage from '../KeyPerformanceIndicators';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

export default function FormStepper(): JSX.Element {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Box style={{ position: 'absolute', zIndex: 1 }}>
        <IconButton
          style={{ padding: '24px' }}
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box style={{ position: 'absolute', zIndex: 1, right: '0px' }}>
        <IconButton
          style={{ padding: '24px' }}
          onClick={handleNext}
          disabled={activeStep === labels.length - 1}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {labels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Route
        path={`${path}/keyperformanceindicator`}
        component={KeyPerformanceIndicatorPage}
      />
      <StepperPages pageNumber={activeStep} />
    </div>
  );
}
