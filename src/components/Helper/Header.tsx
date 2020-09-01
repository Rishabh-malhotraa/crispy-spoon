import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  heading: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    borderRadius: '12px',
    backgroundColor: '#edf6f9',
    width: '100%',
    // color: '#011627',
    color: '#263238',
    fontWeight: 500,
    letterSpacing: '3px',
  },
});

const Header: React.FC<{ heading: string }> = ({ heading }) => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.heading}>
      {heading}
    </Typography>
  );
};

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
