import React from 'react';
import InputCSV from './InputCSV';
import TableCSV from './TableCSV';

const DataDetails = (): JSX.Element => {
  return (
    <>
      <InputCSV />
      <TableCSV title="Numeric Variable" />
      <TableCSV title="Character Variable" />
    </>
  );
};

export default DataDetails;
