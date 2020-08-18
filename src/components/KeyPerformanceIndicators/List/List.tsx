/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      border: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      // overflowY: 'scroll',
      maxHeight: '50vh',
    },
  })
);
const GreenCheckbox = withStyles({
  root: {
    padding: '0px',
    display: 'flex',
    justifyContent: 'flex-end',
    '&$checked': {
      color: green[600],
    },
    '&:hover': {
      background: 'transparent',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const List: React.FC<{ title: string; tests: string[] }> = ({
  title,
  tests,
}) => {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>{title}</TableCell>
              <TableCell align="right">True</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tests.map((test) => (
              <TableRow key={uuid()}>
                <TableCell component="th" scope="test">
                  {test}
                </TableCell>
                <TableCell component="th" scope="test">
                  <GreenCheckbox
                    disableRipple
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
