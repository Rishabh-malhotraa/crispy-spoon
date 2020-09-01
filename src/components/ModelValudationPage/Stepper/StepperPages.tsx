import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyPerformanceIndicatorsPage from 'components/ModelValudationPage/KeyPerformanceIndicators';
import ModelDetails from 'components/ModelValudationPage/ModelDetails';
import DataDetails from 'components/ModelValudationPage/DataDetails';
import { Redirect } from 'react-router-dom';

/**
 * Function renders sub components of model-setup page based on stepper index position
 * @param {Number} pageNumber - tells us which page to render based on index position of stepper
 */
function GetPage(pageNumber: number): JSX.Element | string {
  switch (pageNumber) {
    case 0:
      return <Redirect to="/model-setup/KPI" />;
    case 1:
      return <Redirect to="/model-setup/model-info" />;

    case 2:
      return <Redirect to="/model-setup/table" />;
    default:
      return 'Unknown stepIndex';
  }
}

const StepperPages: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  return <Grid container>{GetPage(pageNumber)}</Grid>;
};

export default StepperPages;
