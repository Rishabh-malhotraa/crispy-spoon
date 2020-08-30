import React from 'react';
import Grid from '@material-ui/core/Grid';

const data = [
  {
    id: 1,
    content: 'Model Name',
    value: 'PlaceHolder Text',
  },
  {
    id: 2,
    content: 'Product',
    value: 'PlaceHolder Text',
  },
  {
    id: 3,
    content: 'Portfolio',
    value: 'PlaceHolder Text',
  },
  {
    id: 4,
    content: 'Date of Development',
    value: 'PlaceHolder Text',
  },
];

const Content = (): JSX.Element => {
  return (
    <div>
      <Grid container direction="column">
        {data.map((element) => {
          return (
            <Grid
              item
              container
              justify="space-between"
              key={element.id}
              style={{ padding: '8px' }}
            >
              <Grid item style={{ fontWeight: 'bold', padding: '8px' }}>
                {element.content}
              </Grid>
              <Grid item style={{ padding: '8px' }}>
                {element.value}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Content;
