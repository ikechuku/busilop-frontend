import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import StoreContext from '../../../stores/nodeStore';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Gender</FormLabel> */}
      <RadioGroup aria-label="template" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Survey" control={<Radio />} label="Survey" />
        <FormControlLabel value="Portfolio" control={<Radio />} label="Portfolio" />
        <FormControlLabel value="None" control={<Radio />} label="None" />
        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
  );
}
