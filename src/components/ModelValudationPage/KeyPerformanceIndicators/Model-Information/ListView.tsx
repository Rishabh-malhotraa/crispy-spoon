import DropDown from 'components/Helper/DropDown';
import Header from 'components/Helper/Header';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { v4 as uuid } from 'uuid';

interface AppProps {
  title?: string;
  data: { name: string; options: string[] }[];
}

const ModelDimension: React.FC<AppProps> = ({ title, data }) => {
  return (
    <>
      <Header heading={title} />
      {data.map(({ name, options }) => {
        return (
          <Grid container item justify="space-between" key={uuid()} style={{ padding: '3px' }}>
            <DropDown options={options} variant="filled" size="small" inputLabel={name} />
          </Grid>
        );
      })}
    </>
  );
};

export default ModelDimension;
