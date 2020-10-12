/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import { v4 as uuid } from 'uuid';
import { characterVariableRoles } from 'Data/TableData-page-2';
import TablePagination from '@material-ui/core/TablePagination';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { useSelector, useDispatch } from 'react-redux';
import { selectCharacterTableState, onSelect, onValidate } from 'redux/slices/characterTableSlice';
import Typography from '@material-ui/core/Typography';
import { CharacterDataType } from 'Data/response';

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

interface EventProps {
  (event: React.ChangeEvent<{ value: unknown }>, index: number): void;
}

interface AppProps {
  data: CharacterDataType[];
}

const CharacterTable: React.FC<AppProps> = ({ data }) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [validationError, setValidationError] = useState<JSX.Element>();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const characterTableState = useSelector(selectCharacterTableState);
  const { characterTableData } = characterTableState;
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
      value: { selection: event.target.value as string, name: data[index].variableName },
    };
    dispatch(onSelect(payload));
  };

  const Value = (i: number) => {
    if (!characterTableData[page * rowsPerPage + i]) return undefined;
    return characterTableData[page * rowsPerPage + i].selection;
  };

  useEffect(() => {
    dispatch(onValidate());
    if (characterTableState.flag === true)
      return setValidationError(
        <Typography
          variant="h6"
          style={{ color: 'red', textAlign: 'center', paddingTop: '2rem', fontStyle: 'italic' }}
        >
          Role for only <u>ONE VARIABLE</u> can be selected as Segmentation Variable
        </Typography>
      );
    return setValidationError(<></>);
  }, [characterTableState.flag, dispatch, characterTableState.characterTableData]);

  return (
    <>
      {validationError}
      <Paper className={classes.root} elevation={3}>
        <TableContainer component="div">
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  className={classes.headingBorder}
                  style={{ width: '15%', visibility: 'hidden' }}
                >
                  Character Variable
                </TableCell>
                <TableCell colSpan={3} align="center" className={classes.headingBorder}>
                  Train
                </TableCell>
                <TableCell
                  colSpan={3}
                  align="center"
                  className={classes.headingBorder}
                  style={{ backgroundColor: grey[300] }}
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
                <TableCell align="center">Character Variable</TableCell>
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
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((element, i) => (
                <TableRow key={uuid()}>
                  <TableCell component="th" scope="row">
                    {element.variableName}
                  </TableCell>
                  <TableCell align="center">{element.train.n}</TableCell>
                  <TableCell align="center">{element.train.missing}</TableCell>
                  <TableCell align="center">{element.train.distinctCatergories}</TableCell>
                  <TableCell align="center">{element.test.n}</TableCell>
                  <TableCell align="center">{element.test.missing}</TableCell>
                  <TableCell align="center">{element.test.distinctCatergories}</TableCell>
                  <TableCell
                    align="center"
                    className={classes.colRole}
                    style={{ paddingTop: '0px', paddingBottom: '0px' }}
                  >
                    <div className={classes.select}>
                      <FormControl size="small" style={{ minWidth: '100%', height: '24px' }}>
                        <NativeSelect
                          value={Value(i)}
                          onChange={(e) => handleChange(e, page * rowsPerPage + i)}
                          disableUnderline
                        >
                          {characterVariableRoles.map((option) => {
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
      {
        // render numeric variable character table from here
      }
    </>
  );
};

export default CharacterTable;
