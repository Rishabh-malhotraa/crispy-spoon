import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GenpactLogo from '../assets/logos/genpact-logo.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    // boxShadow: 'none',
  },
  logo: {
    maxWidth: 160,
  },
  navbarText: {
    color: '#36454f',
    marginLeft: 'auto',
  },
});

const Navbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar variant="regular">
          <IconButton>
            <img
              src={GenpactLogo}
              alt="genpact-logo"
              className={classes.logo}
            />
          </IconButton>
          <Typography variant="h4" className={classes.navbarText}>
            Model Validation
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
