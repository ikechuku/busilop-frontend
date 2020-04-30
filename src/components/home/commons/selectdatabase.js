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
        <InputLabel id="demo-controlled-open-select-label">Database</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={store.all.databaseType}
          onChange={(e) => store.setDatabaseType(e.target.value)}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem default value='SQL'>SQL </MenuItem>
          <MenuItem value='mongo'>MongoDB </MenuItem>
          <MenuItem value='Cassandra'>Cassandra </MenuItem>
          <MenuItem value='Couchbase'>Couchbase </MenuItem>
          <MenuItem value='None'> No database </MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}
);

export default ControlledOpenSelect;