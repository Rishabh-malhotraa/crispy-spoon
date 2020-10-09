import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import DropDown from 'components/Helper/DropDown';
import { TableModel } from 'Data/Table-Data-page2';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles({
  root: {
    marginTop: '2rem',
    paddingLeft: '8rem',
    paddingRight: '8rem',
    '& .MuiTableCell-root': {
      fontSize: '16px',
    },
    // margin: 'auto',
  },

  headingBorder: {
    background: grey[100],
    border: `3px solid ${grey[300]}`,
  },

  colRole: {
    width: '10vw',
  },
  select: {
    color: 'red',
    '& .MuiSelect-root': {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
  },
});

interface AppProps {
  title: string;
  tableData: TableModel;
}
const menu = ['Placeholder 1', 'Placeholder 2', '23'];

const TableCSV: React.FC<AppProps> = ({ title, tableData }) => {
  const classes = useStyles();
  const { heading, data } = tableData;
  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headingBorder} style={{ width: '15%' }}>
                {title}
              </TableCell>
              <TableCell colSpan={4} align="center" className={classes.headingBorder}>
                Train
              </TableCell>
              <TableCell colSpan={4} align="center" className={classes.headingBorder}>
                Test
              </TableCell>
              <TableCell align="center" className={classes.headingBorder} />
            </TableRow>
            <TableRow>
              {heading.map((element, index) => {
                return (
                  <TableCell key={uuid()} align={index === 0 ? 'left' : 'center'}>
                    {element}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={uuid()}>
                <TableCell component="th" scope="row">
                  {row.variableName}
                </TableCell>
                <TableCell align="center">{row.train.n}</TableCell>
                <TableCell align="center">{row.train.missing}</TableCell>
                <TableCell align="center">{row.train.option3}</TableCell>
                <TableCell align="center">{row.train.option4}</TableCell>
                <TableCell align="center">{row.test.n}</TableCell>
                <TableCell align="center">{row.test.missing}</TableCell>
                <TableCell align="center">{row.test.option3}</TableCell>
                <TableCell align="center">{row.test.option4}</TableCell>
                <TableCell align="center" className={classes.colRole}>
                  <div className={classes.select}>
                    <DropDown options={menu} variant="outlined" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableCSV;
