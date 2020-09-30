import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DropDown from 'components/Helper/DropDown';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import ListDropDown from './ListDropdown';
import InfoIcon from 'components/QuantitativeValidationPage/QuantitativeValidationHeader/InfoIcon';

const data = [
  {
    segment: '1',
    technique: 'abc',
    picklefile: 'asdasd',
    modelFitDetails: 'asdasd',
    data: ['a', 'b', 'c'],
  },
];

const ModelSpecification = (): JSX.Element => {
  return (
    <div style={{ padding: '3rem' }}>
      <TableContainer component={Paper}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Segments</TableCell>
              <TableCell align="center">Analyticial Technique</TableCell>
              <TableCell align="center">Pickle File</TableCell>
              <TableCell align="center">Model Fit Detail</TableCell>
              <TableCell align="center">Model Information</TableCell>
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          {/* End of headings */}
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.segment}>
                <TableCell component="th" scope="row">
                  {row.segment}
                </TableCell>
                <TableCell align="center">
                  <DropDown options={row.data} />
                </TableCell>
                <TableCell align="center">
                  <Input type="file" name="pickle-file" id="" />
                </TableCell>
                <TableCell align="center">
                  <ListDropDown />
                </TableCell>
                <TableCell align="center">
                  <InfoIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ModelSpecification;
