import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const TitleFitler = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">ce1</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="" control={<Radio />} label="all" />
        <FormControlLabel value="1" control={<Radio />} label="Yes" />
        <FormControlLabel value="2" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}

export default  TitleFitler;