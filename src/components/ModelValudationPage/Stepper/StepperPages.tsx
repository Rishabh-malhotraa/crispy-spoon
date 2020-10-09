import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

/**
 * Function renders sub components of model-setup page based on stepper index position
 * @param {Number} pageNumber - tells us which page to render based on index position of stepper
 */
function GetPage(pageNumber: number): JSX.Element | string {
  switch (pageNumber) {
    case 0:
      return <Redirect to="/model-setup/table" />;
    case 1:
      return <Redirect to="/model-setup/KPI" />;
    case 2:
      return <Redirect to="/model-setup/model-specification" />;
    default:
      return 'Unknown stepIndex';
  }
}

const StepperPages: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  return <Grid container>{GetPage(pageNumber)}</Grid>;
};

export default StepperPages;
