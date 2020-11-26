import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Container, Grid } from '@material-ui/core';
import IMGPlaceholder from 'assets/image-placeholder.png';

import { heading, table as tableData, TableType } from 'Data/QuantitativeValidation-page4';

const sectionNameSubData = [1, 2, 3, 4];

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

// help only render the table cell once for rowSpan thing to work!
function renderRowSpan(
  index: number,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  name: string,
  rowSpan: number
) {
  if (index === 0)
    return (
      <>
        <TableCell component="th" scope="row" rowSpan={rowSpan}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {name}
        </TableCell>
      </>
    );

  return <></>;
}

// this is for rendering collapsable view in the table!
function RenderCollapseView() {
  return (
    <>
      <Container maxWidth="md" style={{ padding: '1rem 0 1rem 0' }}>
        <Paper elevation={4} style={{ padding: '1rem' }}>
          <Grid container justify="space-between" direction="column">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                KPI Name: $Name of KPI
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="body2" style={{ fontWeight: 'bold' }}>
                Description: $the description
              </Typography>
            </Grid>
          </Grid>
          <Table size="small" aria-label="purchases">
            <TableHead>
              <TableRow>
                <TableCell>Column 1</TableCell>
                <TableCell>Column 2</TableCell>
                <TableCell align="right">Column 3</TableCell>
                <TableCell align="right">Column 4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  col1
                </TableCell>
                <TableCell>col2</TableCell>
                <TableCell align="right">col3</TableCell>
                <TableCell align="right">51</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography gutterBottom variant="h6">
            Graph
          </Typography>
          <Grid container justify="space-around">
            <Grid item>
              <img src={IMGPlaceholder} style={{ height: '200px', width: '200px' }} alt="placeholder" />
            </Grid>
            <Grid item>
              <img src={IMGPlaceholder} style={{ height: '200px', width: '200px' }} alt="placeholder" />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

function Row({ rowData }: { rowData: TableType }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const { data, name } = rowData;
  const rowSpan = data.length;
  return (
    <>
      <>
        {data.map((element, index) => {
          return (
            <TableRow className={classes.root} key={element.id}>
              {/* rederRowSpan only render the Model Level test once for rowSpan */}
              {renderRowSpan(index, open, setOpen, name, rowSpan)}
              <TableCell align="right">{element.kpiName}</TableCell>
              <TableCell align="right">{element.description}</TableCell>
              <TableCell align="right" style={{ backgroundColor: element.trainData.color }}>
                {element.trainData.value}
              </TableCell>
              <TableCell align="right" style={{ backgroundColor: element.testData.color }}>
                {element.testData.value}
              </TableCell>
            </TableRow>
          );
        })}
      </>
      {/* <>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>{RenderCollapseView()}</Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </> */}
    </>
  );
}

export default function CollapsibleTable() {
  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">{heading[0]}</TableCell>
              <TableCell align="center">{heading[1]}</TableCell>
              <TableCell align="center">{heading[2]}</TableCell>
              <TableCell align="right">{heading[3]}</TableCell>
              <TableCell align="right">{heading[4]}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <Row key={row.id} rowData={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {sectionNameSubData.map((element) => {
        return (
          <Box key={element}>
            <RenderCollapseView />
          </Box>
        );
      })}

      <Box>
        <RenderCollapseView />
      </Box>
    </Container>
  );
}
