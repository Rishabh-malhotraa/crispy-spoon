import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonLayout from 'components/QuantitativeValidationPage/ButtonComponent';
import TableComponent from 'components/QuantitativeValidationPage/MainPage';
import InformationBar from 'components/QuantitativeValidationPage/InformationBar';

/**
 * Renders the Quantiative Validation page
 * It consist of Button layout for next and back
 * And then the main Collapsable table
 */

const QuantitativeValidation = (): JSX.Element => {
  return (
    <>
      <InformationBar />
      <ButtonLayout />
      <Grid item style={{ paddingTop: '5rem' }}>
        <TableComponent />
      </Grid>
    </>
  );
};

export default QuantitativeValidation;
