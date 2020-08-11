import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
  root: {
    marginBottom: '2rem',
    marginTop: '2rem',
  },
  table: {},
});

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
  // eslint-disable-next-line react/jsx-props-no-spreading
})((props) => <Checkbox color="default" {...props} />);

export default function ListTable(props) {
  const { title, list } = props;
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>{title}</TableCell>
              <TableCell align="right">True</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow key={uuidv4()}>
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
                <TableCell component="th" scope="row">
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
}

ListTable.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
