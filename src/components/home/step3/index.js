import BuildIcon from '@material-ui/icons/Build';
import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backendselect from '../commons/select'
import { observer } from 'mobx-react-lite'
import nodeStoreContext from '../../../stores/nodeStore'

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
const ControlledExpansionPanels= observer(()=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const store = useContext(nodeStoreContext)



  return (
    <div className={classes.root}>
      <h2>{store.all.appName} Backend Configuration</h2>
      {/* <BuildIcon fontSize="large" /> */}
      <div className="frontend">
        <Backendselect />
      </div>

    </div>
  );
}
);

export default ControlledExpansionPanels