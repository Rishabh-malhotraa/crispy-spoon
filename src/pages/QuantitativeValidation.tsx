import React from 'react';
import TableOfContents from 'components/QuantitativeValidationPage/TableOfContents';
import PerformanceSummaryTable from 'components/QuantitativeValidationPage/PerformanceSummaryTable';
import InformationBar from 'components/QuantitativeValidationPage/QuantitativeValidationHeader';
import HighLevelModelLevelTests from 'components/QuantitativeValidationPage/HighLevelModelLevelTests';
import Grid from '@material-ui/core/Grid';

const drawerWidth = '240px';
const boxPadding = '50px';

/**
 * Renders the Quantiative Validation page
 */

const QuantitativeValidation = (): JSX.Element => {
  return (
    <>
      <TableOfContents />
      <Grid container direction="column">
        <div style={{ marginRight: drawerWidth, padding: boxPadding }}>
          <InformationBar />
          <PerformanceSummaryTable />
          <HighLevelModelLevelTests />
          <PerformanceSummaryTable />
          <PerformanceSummaryTable />
        </div>
      </Grid>
    </>
  );
};

export default QuantitativeValidation;
