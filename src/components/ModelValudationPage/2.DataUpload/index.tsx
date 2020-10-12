import React from 'react';
import InputFile from './InputFile';
import CharacterTable from './CharacterTable';
import NumericTable from './NumericTable';
import { useSelector } from 'react-redux';
import { selectResponse } from 'redux/slices/responseDataSlice';

const DataDetails = (): JSX.Element => {
  const { characterTableData, numericTableData } = useSelector(selectResponse);
  const display = () => {
    if (!characterTableData || !numericTableData) {
      return;
    }

    if (characterTableData.length > 0 && numericTableData.length > 0) {
      return (
        <>
          <CharacterTable data={characterTableData} />
          <NumericTable data={numericTableData} />
        </>
      );
    }
  };
  return (
    <>
      <InputFile />
      {display()}
    </>
  );
};

export default DataDetails;
