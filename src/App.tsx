import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "components/Home/Navbar";
import Tabs from "components/Home/Tabs";
import ModelSetup from "pages/ModelSetup";
import QuantitativeValidation from "pages/QuantitativeValidation";

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Navbar />
        <Tabs />
        <Switch>
          <Route exact path="/model-setup" component={ModelSetup} />
          <Route
            exact
            path="/quanitative-validation"
            component={QuantitativeValidation}
          />
        </Switch>
        <Redirect to="/model-setup" />
      </Router>
    </>
  );
};

export default App;
