import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect, useRouteMatch } from 'react-router-dom';

function GetPage(pageNumber: number): JSX.Element | string {
  const { url } = useRouteMatch();
  switch (pageNumber) {
    case 0:
      return <Redirect to={`${url}/keyperformanceindicator`} />;
    case 1:
      return <Redirect to="/model-setup/page2" />;
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
