import React from 'react';
import Grid from '@material-ui/core/Grid';
import ModelDimension from './ModelDimension';
import AssetDetails from './AssetDetails';

const ModelInformation = (): JSX.Element => {
  return (
    <Grid container>
      <Grid item md={6}>
        <ModelDimension />
      </Grid>
      <Grid item md={6}>
        <AssetDetails />
      </Grid>
    </Grid>
  );
};

export default ModelInformation;
