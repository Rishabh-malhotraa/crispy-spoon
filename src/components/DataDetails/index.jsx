import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Helper/Header';

const DataDetails = () => {
  return (
    <Grid item lg={6}>
      <Container>
        <Header heading="DATA DETAILS" />
      </Container>
    </Grid>
  );
};

export default DataDetails;
