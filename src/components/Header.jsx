import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {},
  heading: {
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    borderRadius: '12px',
    backgroundColor: '#edf6f9',
    width: '100%',
  },
});

const Header = ({ heading }) => {
  const classes = useStyles();
  return (
    <Typography variant="h5" className={classes.heading}>
      {heading}
    </Typography>
  );
};

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
