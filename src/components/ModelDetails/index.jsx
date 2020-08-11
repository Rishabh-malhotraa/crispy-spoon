import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import MonthOfDevelopment from './MonthOfDevelopment';
import ValidationDate from './ValidationDate';
import Dropdown from './Dropdown';
import { dropdownData, validationData } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const ModelDetails = () => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Container>
        <Header heading="Model Related Information" />
        <Box className={classes.root}>
          <TextField fullWidth required label="Model Number" size="small" />
          <MonthOfDevelopment />
          {/* rendering out all the similar-types of components together */}
          {validationData.map((element) => {
            return <ValidationDate text={element.title} key={uuidv4()} />;
          })}
          {dropdownData.map((element) => {
            return (
              <Dropdown
                title={element.title}
                options={element.options}
                key={uuidv4()}
              />
            );
          })}
        </Box>
      </Container>
    </Grid>
  );
};

export default ModelDetails;
