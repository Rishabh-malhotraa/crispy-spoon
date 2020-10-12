import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import { TableModel } from 'Data/Table-Data-page2';
import { v4 as uuid } from 'uuid';
import { numericVariableRoles } from 'Data/TableData-page-2';
import TablePagination from '@material-ui/core/TablePagination';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { useSelector, useDispatch } from 'react-redux';
import { selectNumericTableState, onSelect } from 'redux/slices/numericTableSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: '2rem',
    maxWidth: '70%',
    '& .MuiTableCell-root': {
      fontSize: '16px',
    },
    // margin: 'auto',
  },

  headingBorder: {
    background: grey[100],
    // border: `3px solid ${grey[300]}`,
  },

  colRole: {
    width: '10vw',
  },
  select: {
    color: 'red',
    '& .MuiFormControl-root': {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
    '& .MuiInputBase-root': {
      margin: '0px',
      paddingTop: '2px',
      paddingBottom: '2px',
    },
    '& .MuiNativeSelect-root': {
      padding: '0px 26px 0px 12px',
      border: '1px solid #ced4da',
      borderRadius: 4,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  },
}));

interface AppProps {
  title: string;
  tableData: TableModel;
}

interface EventProps {
  (event: React.ChangeEvent<{ value: unknown }>, index: number): void;
}

const NumericTable: React.FC = () => {
  const classes = useStyles();
  const data = [
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
    { name: 'Rishabh' },
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const numericTableState = useSelector(selectNumericTableState);
  const { numericTableData } = numericTableState;
  const dispatch = useDispatch();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange: EventProps = (event, index) => {
    const payload = {
      index,
      value: { selection: event.target.value as string, name: data[index].name },
    };
    dispatch(onSelect(payload));
  };

  const Value = (i: number) => {
    if (!numericTableData[page * rowsPerPage + i]) return undefined;
    return numericTableData[page * rowsPerPage + i].selection;
  };

  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <TableContainer component="div">
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  className={classes.headingBorder}
                  style={{ width: '15%', visibility: 'hidden' }}
                />
                <TableCell colSpan={3} align="center" className={classes.headingBorder}>
                  Train
                </TableCell>
                <TableCell
                  colSpan={3}
                  align="center"
                  className={classes.headingBorder}
                  style={{ backgroundColor: grey[400] }}
                >
                  Test
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.headingBorder}
                  style={{ visibility: 'hidden' }}
                />
              </TableRow>
              <TableRow>
                <TableCell align="center">Numeric Variable</TableCell>
                <TableCell align="center">#N</TableCell>
                <TableCell align="center">Missing%</TableCell>
                <TableCell align="center">Distinct Values</TableCell>
                <TableCell align="center">#N</TableCell>
                <TableCell align="center">Missing%</TableCell>
                <TableCell align="center">Distinct Values</TableCell>
                <TableCell align="center" style={{ minWidth: '14vw' }}>
                  Role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                <TableRow key={uuid()}>
                  <TableCell component="th" scope="row">
                    Variable Name
                  </TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">5%</TableCell>
                  <TableCell align="center">100</TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">5%</TableCell>
                  <TableCell align="center">100</TableCell>
                  <TableCell align="center" className={classes.colRole}>
                    <div className={classes.select}>
                      <FormControl size="small" style={{ minWidth: '100%' }}>
                        <NativeSelect
                          value={Value(i)}
                          onChange={(e) => handleChange(e, page * rowsPerPage + i)}
                          disableUnderline
                        >
                          {numericVariableRoles.map((option) => {
                            return (
                              <option key={uuid()} value={option}>
                                {option}
                              </option>
                            );
                          })}
                        </NativeSelect>
                      </FormControl>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 7, 10]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default NumericTable;
