import React from 'react';
import InputCSV from './InputCSV';
import TableCSV from './TableCSV';
import { characterVariable, numericVariable } from 'Data/Table-Data-page2';

const DataDetails = (): JSX.Element => {
  return (
    <>
      <InputCSV />
      <TableCSV title="Character Variable" tableData={characterVariable} />
      <TableCSV title="Numeric Variable" tableData={numericVariable} />
    </>
  );
};

export default DataDetails;
