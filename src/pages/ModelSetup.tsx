import React from 'react';
import StepperPages from 'components/ModelValudationPage/Stepper';
import KeyPerformanceIndicatorsPage from 'components/ModelValudationPage/1.KeyPerformanceIndicators';
import DataDetails from 'components/ModelValudationPage/2.DataUpload';
import ModelSpecification from 'components/ModelValudationPage/3.ModelSpecification';
import { Route, useRouteMatch } from 'react-router-dom';

/**
 * We have a stepper component which renders different panes based on different Stepper index
 * if the index value of stepper is 0 we get redirected to url www.localhost.com:3000/model-setup/KPI
 * the logic of that is written in file component/Stepper/StepperPages.jsx
 *
 * After stepper component we have conditional rendering of subpages based on different url
 */

const ModelSetup = (): JSX.Element => {
  const { path } = useRouteMatch();
  return (
    <>
      <StepperPages />
      {
        // <Route exact path={`${path}/model-data`} component={ModelForm} />
      }
      <Route exact path={`${path}/KPI`} component={KeyPerformanceIndicatorsPage} />
      <Route exact path={`${path}/model-specification`} component={ModelSpecification} />
      <Route exact path={`${path}/table`} component={DataDetails} />
    </>
  );
};
export default ModelSetup;
