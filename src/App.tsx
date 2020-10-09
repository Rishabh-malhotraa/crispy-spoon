import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Home/Navbar';
import Tabs from 'components/Home/Tabs';
import ModelSetup from 'pages/ModelSetup';
import QuantitativeValidation from 'pages/QuantitativeValidation';
import { v4 as uuid } from 'uuid';
/**
 * We are setting up react router to render different pages based on different urls
 * eg: when patth of URL is exactly www.localhost.com/3000/model-setup
 * renders the ModelSetup component
 */
const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Navbar />
        <Tabs />
        <Switch>
          <Route path="/model-setup" component={ModelSetup} />
          <Route exact path="/quantitative-validation" component={QuantitativeValidation} />
        </Switch>
        <Redirect to="/model-setup/table" />
      </Router>
    </>
  );
};

export default App;
