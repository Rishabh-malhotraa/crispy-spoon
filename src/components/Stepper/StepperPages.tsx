import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyPerformanceIndicatorsPage from '../KeyPerformanceIndicators';

function GetPage(pageNumber: number): JSX.Element | string {
  switch (pageNumber) {
    case 0:
      return <KeyPerformanceIndicatorsPage />;
    case 1:
      return <>Hey</>;
    case 2:
      return <>Data Details</>;
    default:
      return 'Unknown stepIndex';
  }
}

const StepperPages: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  return <Grid container>{GetPage(pageNumber)}</Grid>;
};

export default StepperPages;
