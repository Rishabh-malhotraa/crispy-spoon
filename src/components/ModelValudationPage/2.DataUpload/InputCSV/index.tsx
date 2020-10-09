/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { URL } from 'API/api';
import { useSelector } from 'react-redux';
import { selectOption } from 'redux/slices/formSlice';

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
  const formState = useSelector(selectOption);

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

  const handleOnSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (devFile || valFile) {
      const formData = new FormData();
      //  not null assertion
      formData.append('developmentFile', devFile!);
      formData.append('validationFile', valFile!);
      formData.append('formData', JSON.stringify(formState));

      console.log(Array.from(formData));

      try {
        const response = await axios.post('http://localhost:5000/upload-file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (err) {
        if (err.response.status === 500) {
          console.log('There was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      }
      // .then((res) => {
      //   console.log(res);
      //   const { fileName, filePath } = res.data;
      //   setUploadedFile({ fileName, filePath });
      // })
      // .catch((err) => console.log(err));
    }
  };

  const classes = useStyles();
  return (
    <>
      <form onSubmit={(e) => handleOnSumbit(e)}>
        <Grid container direction="row" justify="space-around" className={classes.root}>
          <Grid
            item
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
            <Button variant="outlined" type="submit">
              PROFILE THE DATA
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default InputCSV;
