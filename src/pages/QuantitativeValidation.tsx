import React from 'react';
import TableOfContents from 'components/TableOfContents';
import PerformanceSummaryTable from 'components/PerformanceSummaryTable';
import Grid from '@material-ui/core/Grid';
import InformationBar from 'components/QuantitativeValidationHeader';

const drawerWidth = '240px';
const boxPadding = '50px';

const QuantitativeValidation = (): JSX.Element => {
  return (
    <>
      <TableOfContents />
      <Grid container direction="column">
        <div style={{ marginRight: drawerWidth, padding: boxPadding }}>
          <InformationBar />
          <PerformanceSummaryTable />
        </div>
      </Grid>
    </>
  );
};

export default QuantitativeValidation;
