import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: '40vh',
      display: 'flex',

      justifyContent: 'center',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
  })
);

const Index2 = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Grid item container className={classes.root}>
        <Paper>
          <Grid item>
            <div>hey there</div>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Index2;
