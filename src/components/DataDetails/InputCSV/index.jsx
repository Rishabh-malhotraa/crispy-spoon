import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CSVReader from 'react-csv-reader';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import Box from '@material-ui/core/Box';

const handleForce = (data, fileInfo) => {
  // eslint-disable-next-line no-console
  console.log(data, fileInfo);
};

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
};

const InputCSV = () => (
  <>
    <Grid
      item
      container
      justify="space-around"
      alignItems="center"
      style={{ padding: '1rem' }}
    >
      <Grid item lg={4}>
        <Box className="csv__input__root">
          <Typography variant="span" className="inputCSV__text">
            Placeholder Text : 1
          </Typography>
          <span>
            <Button style={{ padding: '0px' }}>
              <div className="root1">
                <CSVReader
                  accept=".xlsx, .xls, .csv"
                  cssClass="react-csv-input"
                  onFileLoaded={handleForce}
                  parserOptions={papaparseOptions}
                />
              </div>
            </Button>
          </span>
        </Box>
      </Grid>
      <Grid item lg={4}>
        <Box className="csv__input__root">
          <Typography variant="span" className="inputCSV__text">
            Placeholder Text : 2
          </Typography>
          <Button style={{ padding: '0px' }}>
            <div className="root1">
              <CSVReader
                accept=".xlsx, .xls, .csv"
                cssClass="react-csv-input"
                onFileLoaded={handleForce}
                parserOptions={papaparseOptions}
              />
            </div>
          </Button>
        </Box>
      </Grid>
      <Grid item lg={2}>
        <Button variant="outlined">Map the Data</Button>
      </Grid>
    </Grid>
  </>
);

export default InputCSV;
