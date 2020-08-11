import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Header from '../Header';
import DatePicker from './DatePicker';
import ActivityClassification from './ActivityClassification';
import ValidationDate from './ValidationDate';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: '25ch',
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
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            required
            id="standard-required"
            label="Model Number"
          />
          <DatePicker />
          <ActivityClassification />
          <ValidationDate />
        </Box>
      </Container>
    </Grid>
  );
};

export default ModelDetails;
