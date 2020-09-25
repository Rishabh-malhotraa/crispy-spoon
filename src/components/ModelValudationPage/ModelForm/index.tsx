import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  border: {
    borderRight: '2px solid #2f2f2f',
  },
  textFieldContainer: {
    '& .MuiGrid-item': {
      padding: '.2rem',
    },
    '& .MuiTextField-root': {
      width: '400px',
    },
  },
});

const ModelInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container>
          {/* Model Specified */}
          <Grid item container direction="row" justify="center">
            <Grid item sm={3} className={classes.border}>
              <Typography variant="h4">Model Specifics</Typography>
            </Grid>
            <Grid
              item
              container
              sm={6}
              direction="column"
              style={{ paddingLeft: '1rem' }}
              className={classes.textFieldContainer}
            >
              <Grid item>
                <TextField id="filled-basic" label="Model Name" variant="filled" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Activity Classification" variant="filled" />
              </Grid>
              <Grid item>
                <TextField
                  label="Last vaidation Date"
                  type="date"
                  variant="filled"
                  defaultValue="2020-01-01"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Last Monitoring Date"
                  type="date"
                  variant="filled"
                  defaultValue="2020-01-01"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Asset Details */}
          <Grid item container style={{ paddingTop: '3rem' }} justify="center">
            <Grid item sm={3} className={classes.border}>
              <Typography variant="h4">Asset Details</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              sm={6}
              style={{ paddingLeft: '1rem' }}
              className={classes.textFieldContainer}
            >
              <Grid item>
                <TextField id="filled-basic" label="Asset Class" variant="outlined" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Product Name" variant="filled" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Country" variant="standard" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Portfolio" variant="filled" />
              </Grid>
            </Grid>
          </Grid>
          {/* Development Data Time Frame */}
          <Grid item container style={{ paddingTop: '3rem' }} justify="center">
            <Grid item sm={3} className={classes.border}>
              <Typography variant="h5">Development Data Time Frame</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              sm={6}
              style={{ paddingLeft: '1rem' }}
              className={classes.textFieldContainer}
            >
              <Grid item>
                <TextField label="Observation Month" type="date" variant="filled" defaultValue="2020-01-01" />
              </Grid>
              <Grid item>
                <TextField
                  label="Observation Window"
                  type="date"
                  variant="filled"
                  defaultValue="2020-01-01"
                />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Performance Window" variant="standard" />
              </Grid>
            </Grid>
          </Grid>
          {/* Validation Data Time Frame */}
          <Grid item container style={{ paddingTop: '3rem' }} justify="center">
            <Grid item sm={3} className={classes.border}>
              <Typography variant="h5">Validation Data Time Frame</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              sm={6}
              style={{ paddingLeft: '1rem' }}
              className={classes.textFieldContainer}
            >
              <Grid item>
                <TextField label="Observation Month" type="date" variant="filled" defaultValue="2020-01-01" />
              </Grid>
              <Grid item>
                <TextField
                  label="Observation Window"
                  type="date"
                  variant="filled"
                  defaultValue="2020-01-01"
                />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Performance Window" variant="standard" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ModelInfo;
