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

const useStyles = makeStyles({
  root: {
    padding: '1rem',
    margin: 'auto',
  },
  table: {
    width: '100%',
  },
  headingBorder: {
    background: grey[100],
    border: `3px solid ${grey[300]}`,
  },
  col1: {
    width: '10vw',
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

function createData(
  name: string,
  option1: number,
  option2: number,
  option3: number,
  option4: number,
  option5: number,
  option6: number,
  option7: number,
  option8: number,
  option9: string[]
) {
  return {
    name,
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
    option7,
    option8,
    option9,
  };
}

const rows = [
  createData('Varaiable 1', 159, 6.0, 24, 4.0, 0, 0, 0, 0, [
    'Placeholder 1',
    'Placeholder 2',
    'Placeholder 3',
  ]),
  createData('Varaiable 2', 159, 6.0, 24, 4.0, 0, 0, 0, 0, [
    'Placeholder 1',
    'Placeholder 2',
    'Placeholder 3',
  ]),
  createData('Varaiable 3', 159, 6.0, 24, 4.0, 0, 0, 0, 0, [
    'Placeholder 1',
    'Placeholder 2',
    'Placeholder 3',
  ]),
  createData('Varaiable 4', 159, 6.0, 24, 4.0, 0, 0, 0, 0, [
    'Placeholder 1',
    'Placeholder 2',
    'Placeholder 3',
  ]),
  createData('Varaiable 5', 159, 6.0, 24, 4.0, 0, 0, 0, 0, [
    'Placeholder 1',
    'Placeholder 2',
    'Placeholder 3',
  ]),
  // createData('Varaiable 6', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 7', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 8', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 9', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 10', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 11', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 12', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 13', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 14', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
  // createData('Varaiable 15', 159, 6.0, 24, 4.0, 0, 0, 0, 0),
];

interface AppProps {
  title: string;
  infoProps: {
    t1: string;
    t2: string;
  };
}

const TableCSV: React.FC<AppProps> = ({ title, infoProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{}}>
              <TableCell className={classes.headingBorder}>{title}</TableCell>
              <TableCell colSpan={4} align="center" className={classes.headingBorder}>
                Train
              </TableCell>
              <TableCell colSpan={4} align="center" className={classes.headingBorder}>
                Test
              </TableCell>
              <TableCell align="center" className={classes.headingBorder} />
            </TableRow>
            <TableRow>
              <TableCell>Variable</TableCell>
              <TableCell align="right">#N</TableCell>
              <TableCell align="right">% Missing</TableCell>
              <TableCell align="right">{infoProps.t1}</TableCell>
              <TableCell align="right">{infoProps.t2}</TableCell>
              <TableCell align="right">#N</TableCell>
              <TableCell align="right">% Missing</TableCell>
              <TableCell align="right">{infoProps.t1}</TableCell>
              <TableCell align="right">{infoProps.t2}</TableCell>
              <TableCell align="right">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={classes.col1}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.option1}</TableCell>
                <TableCell align="right">{row.option2}</TableCell>
                <TableCell align="right">{row.option3}</TableCell>
                <TableCell align="right">{row.option4}</TableCell>
                <TableCell align="right">{row.option5}</TableCell>
                <TableCell align="right">{row.option6}</TableCell>
                <TableCell align="right">{row.option7}</TableCell>
                <TableCell align="right">{row.option8}</TableCell>
                <TableCell align="right" className={classes.colRole}>
                  <div className={classes.select}>
                    <DropDown options={row.option9} />
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
