import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import nodeStoreContext from '../../../stores/nodeStore';
import { observer } from 'mobx-react-lite';


const RadioButtonsGroup = observer(() => {
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const store = useContext(nodeStoreContext)


  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Build tool</FormLabel>
      <RadioGroup aria-label="template" name="" value={value} onChange={handleChange}>
        <FormControlLabel onClick={(e) => store.setBuildTool(e.target.value)} value="Maven" control={<Radio />} label="Maven" />
        <FormControlLabel onClick={(e) => store.setBuildTool(e.target.value)} value="Gradle" control={<Radio />} label="Gradle" />
      </RadioGroup>
    </FormControl>
  );
}
)


export default RadioButtonsGroup


