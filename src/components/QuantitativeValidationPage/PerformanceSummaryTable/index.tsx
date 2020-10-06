/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from 'components/Helper/Header';
import { v1 as uuid } from 'uuid';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding: '50px',
  },
});

const data = ['Segment', 'Model Accuracy', 'Model Discriminatory Power', 'Model Stability'];
const inputData = [0, 1, 2, 3, 4, 5];

const PerformaceSummaryTable = (): JSX.Element => {
  const classes = useStyles();
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <Grid item>
      <Header heading="Performance Summary" />
      <TableContainer component={Paper} ref={divRef}>
        <Table size="small" className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data.map((element) => (
                <TableCell key={uuid()}>{element}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {inputData.map((element, index) => (
              <TableRow key={element}>
                {data.map(() => (
                  <TableCell component="th" scope="row" key={uuid()}>
                    {element}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PerformaceSummaryTable;
