import React from 'react';
import TableOfContents from 'components/TableOfContents';
import Grid from '@material-ui/core/Grid';

const drawerWidth = '240px';

const QuantitativeValidation = (): JSX.Element => {
  return (
    <Grid container direction="row-reverse" style={{ height: '120vh' }}>
      <Grid item style={{ marginLeft: drawerWidth }}>
        <TableOfContents />
      </Grid>
    </Grid>
  );
};

export default QuantitativeValidation;
