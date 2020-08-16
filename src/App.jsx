import React from 'react';
import Grid from '@material-ui/core/Grid';

import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import KeyPerformanceIndexComponent from './components/KeyPerformanceIndicators';
import ModelDetails from './components/ModelDetails';
import DataDetails from './components/DataDetails';
import FetchButton from './components/FetchButton';

const App = () => {
  return (
    <>
      <Navbar />
      <Tabs />
      <Grid container>
        <ModelDetails />
        <KeyPerformanceIndexComponent />
        <DataDetails />
      </Grid>
      <FetchButton />
    </>
  );
};

export default App;
