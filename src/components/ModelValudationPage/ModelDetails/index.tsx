import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import Header from 'components/Helper/Header';
import MonthOfDevelopment from './MonthOfDevelopment';
import ValidationDate from './ValidationDate';
import Dropdown from './Dropdown';
import {
  dropdowndata_model_related_information,
  dropdowndata_product_related_information,
  dropdowndata_risk_related_information,
  validation_data_label,
  textfield_risk_related_information,
} from '../../../Data/ModelDetailsInformation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  item: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));

const ModelDetails = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between">
      <Grid item lg={6}>
        <Container>
          <Header heading="Model Related Information" />
          <Box className={classes.root}>
            <Grid item className={classes.item}>
              <TextField
                required
                label="Model Number"
                size="small"
                style={{ minWidth: '45%' }}
              />
              <MonthOfDevelopment />
            </Grid>
            {/* rendering out all the similar-types of components together */}
            <Grid item className={classes.item}>
              {validation_data_label.map((element) => {
                return <ValidationDate text={element.title} key={uuid()} />;
              })}
            </Grid>
            <Grid item className={classes.item}>
              {dropdowndata_model_related_information.map((element) => {
                return (
                  <Dropdown
                    title={element.title}
                    options={element.options}
                    key={uuid()}
                  />
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Grid>
      <Grid container item direction="column" lg={6}>
        <Grid item>
          <Container>
            <Header heading="Product Related Information" />
            {dropdowndata_product_related_information.map((element) => {
              return (
                <Dropdown
                  title={element.title}
                  options={element.options}
                  key={uuid()}
                />
              );
            })}
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <Header heading="Risk & Modeling Relation Information" />
            {dropdowndata_risk_related_information.map((element) => {
              return (
                <Dropdown
                  title={element.title}
                  options={element.options}
                  key={uuid()}
                />
              );
            })}
            {textfield_risk_related_information.map((element) => {
              return (
                <TextField
                  key={uuid()}
                  required
                  label={element}
                  size="small"
                  style={{
                    maxWidth: '45%',
                    margin: '1rem',
                    marginLeft: '0.5rem',
                  }}
                />
              );
            })}
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ModelDetails;
