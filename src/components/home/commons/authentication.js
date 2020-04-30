import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react-lite'
import nodeStoreContext from '../../../stores/nodeStore'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ControlledOpenSelect = observer(() => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const store = useContext(nodeStoreContext)

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button className={classes.button} onClick={handleOpen}>
        Select a Database 
       </Button> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="authentication-select-label">Authentication</InputLabel>
        <Select
          labelId="authentication-select-label"
          id="authentication-label"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={store.all.authenticationType}
          onChange={(e) => store.setAuthenticationType(e.target.value)}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem default value='JWT'>JWT </MenuItem>
          <MenuItem value='Oauth'>Oauth </MenuItem>
          <MenuItem value='HTTP_Session'>HTTP Session </MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}
);

export default ControlledOpenSelect;