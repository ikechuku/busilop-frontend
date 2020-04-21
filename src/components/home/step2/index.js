import BuildIcon from '@material-ui/icons/Build';
import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '../commons/radio'
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

const ControlledExpansionPanels = observer( ()=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const store = useContext(nodeStoreContext)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h2>{store.all.appName} Frontend Configuration</h2>
      <div className="frontend">
        <div className="">
          <BuildIcon fontSize="large" />
        </div>
      </div>

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Angular</Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Select an Angular Template
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>React</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Select an React Template
          </Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Radio />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Build a Frontend</Typography>
          {/* <Typography className={classes.secondaryHeading}>Using our interactive build tool</Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.secondaryHeading}>
            This feature not yet available
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
);

export default ControlledExpansionPanels