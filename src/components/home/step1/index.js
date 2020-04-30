import React, { useContext } from 'react'
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
      <h2> Application Project Details</h2>
      <form className={classes.root} Validate autoComplete="off">
        <br />
        <Alert severity="info">This consists of the basic information about the application </Alert>
        <br />
        <TextField value={store.all.baseName} onChange={(e) => store.setBaseName(e.target.value)} className={classes.big} id="baseName" label="Application Base Name" variant="outlined" />
        <br />
        <br />
        <TextField value={store.all.packageName} onChange={(e) => store.setPackageName(e.target.value)} className={classes.big} id="packageName" label="Package Name" variant="outlined" />
        {/* <br />
        <br />
        <TextField value={store.all.author} onChange={(e) => store.setAppName(e.target.value)} className={classes.big} id="appName" label="Application Name" variant="outlined" /> */}
        <br />
        <br />
        {/* <FormGroup column>
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

        </FormGroup> */}
      </form>
    </div>
  );
});

export default BasicTextFields