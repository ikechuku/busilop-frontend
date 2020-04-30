import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { observer } from 'mobx-react-lite'
import nodeStoreContext from '../../stores/nodeStore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NestedList = observer(() => {
  const classes = useStyles();
  const store = useContext(nodeStoreContext)

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Settings summary
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary="Application Name" />
        <ListItemIcon>
          <h3>{store.all.baseName}</h3>
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemText primary="Package Name" />
        <br />
        <ListItemIcon>
          <h3>{store.all.packageName}</h3>
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemText primary="Package Manager" />
        <br />
        <ListItemIcon>
          <h3>{store.all.packageManager}</h3>
        </ListItemIcon>
      </ListItem>



      <ListItem button>
        <ListItemText primary="Client Framework" />
        <ListItemIcon>
          <h3>{store.all.clientFramework}</h3>
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemText primary="Backend" />
        <ListItemIcon>
          <h3>{store.all.backend}</h3>
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemText primary="Build Tool" />
        <ListItemIcon>
          <h3>{store.all.buildTool}</h3>
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemText primary="Authentication" />
        <ListItemIcon>
          <h3>{store.all.authenticationType}</h3>
        </ListItemIcon>
      </ListItem>


      <ListItem button>
        <ListItemText primary="Database Type" />
        <ListItemIcon>
          <h3>{store.all.databaseType}</h3>
        </ListItemIcon>
      </ListItem>



    </List>
  );
})

export default NestedList