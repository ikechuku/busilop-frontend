import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '../commons/radio'
import PackageManager from '../commons/packageManager'
import { observer } from 'mobx-react-lite'
import Button from '@material-ui/core/Button';

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

  return (
    <div className={classes.root}>
      <h2> Frontend Configuration</h2>
      <div className="frontend">
      </div>
      <Radio />
      <PackageManager />
      <br />
      <br />
      <Button href='/form' variant="contained">Ui Builder</Button>
    </div>
  );
}
);

export default ControlledExpansionPanels