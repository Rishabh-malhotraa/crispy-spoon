import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import { selectCharacterTableState } from 'redux/slices/characterTableSlice';
import { onTabIndexChange } from 'redux/slices/tabIndexSlice';
import { selectForm } from 'redux/slices/formSlice';
import { selectModelName } from 'redux/slices/modelNameSlice';
import labels from 'Data/Stepper-Labels';
import StepperPages from './StepperPages';

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

/**
 * manages which sub-page to display on model-setup page; the layout of the page consist
 * of two buttons for next and back wrapped in a box followed by the main stepper component
 */
export default function FormStepper(): JSX.Element {
  const { flag } = useSelector(selectCharacterTableState);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const formState = useSelector(selectForm);
  const modelName = useSelector(selectModelName);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (activeStep === 3) {
    dispatch(onTabIndexChange(1));
  }

  // this is the validation check, if none of the given are filled the next step would be dissabled
  const checkRequiredValues = () => {
    if (activeStep === 0) {
      if (
        formState.function &&
        formState.outcomeType &&
        formState.dataStructure &&
        formState.analyticTechnique &&
        formState.modelUse &&
        formState.modelType &&
        formState.modelStructure &&
        formState.entity &&
        formState.businessUnit &&
        formState.modelTier &&
        formState.riskType &&
        formState.eventName &&
        modelName &&
        formState.activityClassification &&
        formState.assetClass &&
        formState.assetClass &&
        formState.productName &&
        formState.portfolio
      )
        return false;
    }
    return true;
  };

  return (
    <div className={classes.root}>
      <Box className={`${classes.buttonBox} ${classes.positionLeft}`}>
        <Button
          variant="text"
          size="large"
          color="inherit"
          onClick={handleBack}
          disabled={activeStep === 0}
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
          disabled={(activeStep === 1 && flag) || !checkRequiredValues()}
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>
      </Box>
      <Stepper activeStep={activeStep} alternativeLabel style={{ background: 'transparent' }}>
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
