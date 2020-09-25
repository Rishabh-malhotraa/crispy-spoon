import DropDown from 'components/Helper/DropDown';
import Header from 'components/Helper/Header';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  select: {
    color: 'red',
    '& .MuiSelect-root': {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
  },
});

const data = [
  {
    name: 'Function',
    options: ['PlaceHolder 1', '2', '3'],
  },
  {
    name: 'Outcome Type',
    options: ['PlaceHolder 1', '2', '3'],
  },
  {
    name: 'Data Structure',
    options: ['PlaceHolder 1', '2', '3'],
  },
  {
    name: 'Model Use',
    options: ['PlaceHolder 1', '2', '3'],
  },
  {
    name: 'Analytic Technique',
    options: ['PlaceHolder 1', '2', '3'],
  },
];

const ModelDimension = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Header heading="Model Dimensions" />
      {data.map(({ name, options }) => {
        return (
          <Grid container item justify="space-between" key={name} style={{ padding: '4px' }}>
            <Grid item style={{ fontWeight: 'bold' }}>
              {name}
            </Grid>
            <Grid item className={classes.select}>
              <DropDown options={options} />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default ModelDimension;
