// import BuildIcon from '@material-ui/icons/Build';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backendselect from '../commons/select'
import { observer } from 'mobx-react-lite'
import nodeStoreContext from '../../../stores/nodeStore'
import TextField from '@material-ui/core/TextField';
import SelectDB from '../commons/selectdatabase'
import Authentication from '../commons/authentication'
import BuildTool from '../commons/buildTool'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const ControlledExpansionPanels = observer(() => {
  const classes = useStyles();

  const store = useContext(nodeStoreContext)



  return (
    <div className={classes.root}>
      <h2>Backend Configuration</h2>
      {/* <BuildIcon fontSize="large" /> */}
      <div className="frontend">
        <Backendselect />
        <SelectDB />
        <Authentication />
        <BuildTool />
        {/* <TextField value={store.all.authorEmail} onChange={(e) => store.setAuthorEmail(e.target.value)} className={classes.big} id="authorEmail" label="Author Email" variant="outlined" /> */}

      </div>

    </div>
  );
}
);

export default ControlledExpansionPanels