import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ModelSetup from './pages/ModelSetup';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Tabs />
      <Router>
        <Switch>
          <Route path="/model-setup" component={ModelSetup} />
        </Switch>
        <Redirect to="/model-setup/keyperformanceindicator" />
      </Router>
    </>
  );
};

export default App;
