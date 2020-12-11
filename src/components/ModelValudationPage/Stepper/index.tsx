/* eslint-disable no-console */
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
import { selectNumericTableState } from 'redux/slices/numericTableSlice';
import { onTabIndexChange } from 'redux/slices/tabIndexSlice';
import { selectForm } from 'redux/slices/formSlice';
import { selectModelName } from 'redux/slices/modelNameSlice';
import { selectuuid } from 'redux/slices/uuidSlice';
import labels from 'Data/Stepper-Labels';
import StepperPages from './StepperPages';
import axios from 'axios';
import { NEXT_BUTTON_DATA_UPLOAD, QUANTITATIVE_VALIDATION_DATA_URL } from 'API/api';
import QuantitativeValidation from 'pages/QuantitativeValidation';

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
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const formState = useSelector(selectForm);
  const modelName = useSelector(selectModelName);
  const { numericTableData } = useSelector(selectNumericTableState);
  const { flag, characterTableData } = useSelector(selectCharacterTableState);
  const KEY = useSelector(selectuuid);

  //  on handleNext you submit formdata! on step 3|| this all is a mess plus CORS giving me a headache
  const handleNext = async () => {
    if (activeStep === 1) {
      const formData = new FormData();
      formData.append('character-table', JSON.stringify(characterTableData));
      formData.append('numeric-table', JSON.stringify(numericTableData));
      formData.append('uuid', KEY);
      axios
        .post(NEXT_BUTTON_DATA_UPLOAD, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        })
        .then((response) => {
          console.log(response);
          // discard the response if the key does not match with the key you send
          // make sure they res
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((error) => {
          console.log(error);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        });
      // const responseDataUUID = KEY;
      // if (responseDataUUID === KEY) {
      //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
      // }

      // catch (err) {
      //   if (err) {
      //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
      //     console.log('There was a problem with the server');
      //     console.log(err);
      //   } else {
      //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
      //     console.log(err.response);
      //   }
      // }
    } else if (activeStep === 2) {
      const response = await fetch(QUANTITATIVE_VALIDATION_DATA_URL);
      const data = await response.json();
      console.log(data);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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

  /** Api Request for the second step if the stepper */
  // const ValidateStepTwo = async (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('character-table', JSON.stringify(characterTableData));
  //   formData.append('numeric-table', JSON.stringify(numericTableData));
  //   formData.append('uuid', KEY);
  //   try {
  //     const { data } = await axios.post(NEXT_BUTTON_DATA_UPLOAD, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     // discard the response if the key does not match with the key you send
  //     // make sure they res
  //     console.log(data);
  //     const responseDataUUID = KEY;
  //     if (responseDataUUID === KEY) {
  //       setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //     }
  //   } catch (err) {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //     if (err) {
  //       console.log('There was a problem with the server');
  //       console.log(err);
  //     } else {
  //       console.log(err.response);
  //     }
  //   }
  // };

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
