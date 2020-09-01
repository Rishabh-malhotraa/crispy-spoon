import React from 'react';
import InputCSV from './InputCSV';
import TableCSV from './TableCSV';

const DataDetails = (): JSX.Element => {
  return (
    <>
      <InputCSV />
      <TableCSV title="Numeric Variable" infoProps={{ t1: 'Average', t2: 'Standard Deviation' }} />
      <TableCSV title="Character Variable" infoProps={{ t1: '#Distinct Value', t2: 'Top 3 Values' }} />
    </>
  );
};

export default DataDetails;
