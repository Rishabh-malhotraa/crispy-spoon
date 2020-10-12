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
import { AnalyticalTechnique } from 'Data/Model-Specification-page-3';
import { grey } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

const data = [
  {
    segment: '1',
    technique: 'abc',
    picklefile: 'asdasd',
    modelFitDetails: 'asdasd',
    data: ['a', 'b', 'c'],
  },
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
    <Box style={{ margin: '3rem' }}>
      <TableContainer component="div" style={{ height: '70vh', backgroundColor: 'transparent' }}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={1}>Serial Number</TableCell>
              <TableCell align="center" colSpan={5} style={{ backgroundColor: grey[300] }}>
                Observations
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Segment Name</TableCell>
              <TableCell align="center">Analyticial Technique</TableCell>
              <TableCell align="center">Frequencies</TableCell>
              <TableCell align="center">Pickle File</TableCell>
              <TableCell align="center">Independant Variable</TableCell>
              <TableCell align="center">Model Information</TableCell>
            </TableRow>
          </TableHead>
          {/* End of headings */}
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.segment}>
                <TableCell>1. Name of Segment</TableCell>
                <TableCell align="center">
                  <DropDown options={AnalyticalTechnique} />
                </TableCell>
                <TableCell align="center">Rishabh Malhotra</TableCell>
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
    </Box>
  );
};

export default ModelSpecification;
