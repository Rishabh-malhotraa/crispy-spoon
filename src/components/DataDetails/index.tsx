import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputCSV from './InputCSV';
import TableCSV from './TableCSV';

const DataDetails = (): JSX.Element => {
  return (
    <>
      <InputCSV />
      <TableCSV />
    </>
  );
};

export default DataDetails;
