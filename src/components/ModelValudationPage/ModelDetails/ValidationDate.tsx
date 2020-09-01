import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row",
    alignItems: "flex-end",
    minWidth: "47%",
    margin: theme.spacing(1),
    justifyContent: "space-between",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
}));

const ValidationDate: React.FC<{ text: string }> = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form noValidate>
        <TextField
          label={text}
          type="date"
          size="small"
          defaultValue="2020-01-01"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <FormControl component="fieldset">
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label="Never"
        />
      </FormControl>
    </div>
  );
};

export default ValidationDate;

ValidationDate.propTypes = {
  text: PropTypes.string.isRequired,
};
