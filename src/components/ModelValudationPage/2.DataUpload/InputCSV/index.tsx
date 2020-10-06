/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: { fontFamily: 'Roboto' },
  hide: {
    display: 'none',
  },
  file: {
    padding: '.5rem',
    border: '3px solid grey',
    borderRadius: '1rem',
    '& .MuiTypography-root': {
      padding: '.5rem',
    },
  },
});

const InputCSV = (): JSX.Element => {
  const developmentFileRef = useRef<HTMLInputElement>(null);
  const validationFileRef = useRef<HTMLInputElement>(null);

  const [devFile, setDevFile] = useState<Blob>();
  const [devFileName, setDevFileName] = useState<string>('Choose a development(Train) file');
  const [valFile, setValFile] = useState<Blob>();
  const [valFileName, setValFileName] = useState<string>('Choose a validation(Test) file');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, fileName: string) => {
    const file = event.target.files![0];
    if (file) {
      if (fileName === 'development file') {
        setDevFile(file);
        setDevFileName(`Development File: ${file.name as string}`);
      } else if (fileName === 'validation file') {
        setValFile(file);
        setValFileName(`Validation File: ${file.name as string}`);
      }
    }
  };

  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justify="space-around" className={classes.root}>
        <Grid
          item
          direction="column"
          onClick={() => {
            developmentFileRef.current?.click();
          }}
        >
          <input
            type="file"
            className={classes.hide}
            ref={developmentFileRef}
            onChange={(e) => {
              handleInputChange(e, 'development file');
            }}
          />
          <Grid item>
            <Button variant="outlined">{devFileName}</Button>
          </Grid>
        </Grid>
        <Grid
          item
          direction="column"
          onClick={() => {
            validationFileRef.current?.click();
          }}
        >
          <input
            type="file"
            className={classes.hide}
            ref={validationFileRef}
            onChange={(e) => {
              handleInputChange(e, 'validation file');
            }}
          />
          <Grid item>
            <Button variant="outlined">{valFileName}</Button>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="outlined">PROFILE THE DATA</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default InputCSV;
