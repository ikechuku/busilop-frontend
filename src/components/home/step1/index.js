import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    // width: '25ch',
    color: 'red',

  },
  big: {
    width: '100%',
    color: 'red',
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <h1>General Project Details</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <Alert severity="info">This consists of the basic information about the application  </Alert>
        <TextField className={classes.big} id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
}
