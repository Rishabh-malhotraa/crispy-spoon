import React from 'react';
import StepperPages from 'components/ModelValudationPage/Stepper';
import KeyPerformanceIndicatorsPage from 'components/ModelValudationPage/KeyPerformanceIndicators';
import ModelDetails from 'components/ModelValudationPage/ModelDetails';
import DataDetails from 'components/ModelValudationPage/DataDetails';
import { Route, useRouteMatch } from 'react-router-dom';

/**
 * We have a stepper component which renders different panes based on different Stepper index
 * if the index value of stepper is 0 we get redirected to url www.localhost.com:3000/model-setup/KPI
 * the logic of that is written in file component/Stepper/StepperPages.jsx
 *
 * After stepper component we have conditional rendering of subpages based on different url
 */

const ModelSetup = (): JSX.Element => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <StepperPages />
      <Route exact path={`${path}/KPI`} component={KeyPerformanceIndicatorsPage} />
      <Route exact path={`${path}/model-info`} component={ModelDetails} />
      <Route exact path={`${path}/table`} component={DataDetails} />
    </>
  );
};
export default ModelSetup;
