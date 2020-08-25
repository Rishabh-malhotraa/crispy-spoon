import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';

import labels from '../../Data/stepperLabels';
import StepperPages from './StepperPages';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      background: 'tranparent',
    },
  })
);

export default function FormStepper(): JSX.Element {
  const classes = useStyles();
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
          style={{ padding: '16px', margin: '8px' }}
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box style={{ position: 'absolute', zIndex: 1, right: '0px' }}>
        <IconButton
          type="submit"
          style={{ padding: '16px', margin: '8px' }}
          onClick={handleNext}
          disabled={activeStep === labels.length - 1}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ background: 'transparent' }}
      >
        {labels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <StepperPages pageNumber={activeStep} />
    </div>
  );
}
