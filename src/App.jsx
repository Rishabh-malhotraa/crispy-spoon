import React from 'react';
import Grid from '@material-ui/core/Grid';

import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import KeyPerformanceIndexComponent from './components/Table';

const App = () => {
  return (
    <>
      <Navbar />
      <Tabs />
      <Grid container>
        <Grid item xs={4}>
          hey
        </Grid>
        <KeyPerformanceIndexComponent />
        <Grid item xs={4}>
          hey
        </Grid>
      </Grid>
    </>
  );
};

export default App;
