import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { observer } from 'mobx-react-lite'
import nodeStoreContext from '../../../stores/nodeStore'
// import StoreContext from '../../../stores/nodeStore';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    // width: '60%',
    // color: 'red',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // border: 'solid 1px red'

  },
  big: {
    width: '100%',
    padding: '  ',
  }
}));

const BasicTextFields = observer(() => {
  const classes = useStyles();
  // const store = React.useContext(StoreContext);
  const store = useContext(nodeStoreContext)


  
  const handleChange = () => {
    store.all.checkedA = !store.all.checkedA
  };


  // console.log(store.all.appName);
  return (

    <div>
      <h2> {store.all.appName} Project Details</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <br />
        <Alert severity="info">This consists of the basic information about the application </Alert>
        <br />
        <TextField onChange={(e) => store.setAuthorName(e.target.value) } className={classes.big} id="authorName" label="Author Name" variant="outlined" />
        <br />
        <br />
        <TextField onChange={(e) => store.setAuthorEmail(e.target.value) } className={classes.big} id="authorEmail" label="Author Email" variant="outlined" />
        <br />
        <br />
        <TextField onChange={(e) => store.setAppName(e.target.value) }  className={classes.big} id="appName" label="Application Name" variant="outlined" />
        <br />
        <br />
        <TextareaAutosize onChange={(e) => store.setAppDescription(e.target.value) } className={classes.big} aria-label="minimum height" rowsMin={5} placeholder="Application Description" />
        <FormGroup column>
          <FormControlLabel
            control={
              <Switch
                checked={store.all.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="Add ReadMe file"
          />
          <FormControlLabel
            control={
              <Switch
                checked={store.all.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Use Docker"
          />
          {/* <FormControlLabel
            control={
              <Switch
                checked={store.all.checkedC}
                onChange={handleChange}
                name="checkedC"
                color="primary"
              />
            }
            label=""
          /> */}
        </FormGroup>
      </form>
    </div>
  );
});

export default BasicTextFields