import React from 'react';
import InputFile from './InputFile';
import CharacterTable from './CharacterTable';
import NumericTable from './NumericTable';

const DataDetails = (): JSX.Element => {
  return (
    <>
      <InputFile />
      <CharacterTable />
      <NumericTable />
    </>
  );
};

export default DataDetails;
