import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
      {/* <FormLabel component="legend">Gender</FormLabel> */}
      <RadioGroup aria-label="template" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel onClick={(e) => store.setClientFramework(e.target.value)} value="Angular" control={<Radio />} label="Angular" />
        <FormControlLabel onClick={(e) => store.setClientFramework(e.target.value)} value="React" control={<Radio />} label="React" />
      </RadioGroup>
    </FormControl>
  );
}
)


export default RadioButtonsGroup


