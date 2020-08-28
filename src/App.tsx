import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from 'components/Home/Navbar';
import Tabs from 'components/Home/Tabs';

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Tabs />
      <Router>
        <Switch>
          <Route exact path="/" />
        </Switch>
        <Redirect to="/" />
      </Router>
    </>
  );
};

export default App;
