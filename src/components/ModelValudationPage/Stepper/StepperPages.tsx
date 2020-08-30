import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyPerformanceIndicatorsPage from 'components/ModelValudationPage/KeyPerformanceIndicators';
import ModelDetails from 'components/ModelValudationPage/ModelDetails';
import DataDetails from 'components/ModelValudationPage/DataDetails';

function GetPage(pageNumber: number): JSX.Element | string {
  switch (pageNumber) {
    case 0:
      return <KeyPerformanceIndicatorsPage />;
    case 1:
      return <ModelDetails />;
    case 2:
      return <DataDetails />;
    default:
      return 'Unknown stepIndex';
  }
}

const StepperPages: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  return <Grid container>{GetPage(pageNumber)}</Grid>;
};

export default StepperPages;
