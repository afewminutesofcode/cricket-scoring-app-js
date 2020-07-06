import React from "react";

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const MUIRadioGroup = ({ ariaLabel, name, value, onChange, data }) => (
  <FormControl component="fieldset">
    <RadioGroup aria-label={ariaLabel} name={name} value={value} onChange={onChange}>
      {data.map((item) => (
        <FormControlLabel
          key={item.value}
          value={item.value}
          control={<Radio />}
          label={item.label}
          disabled={item.disabled}
        />
      ))}
    </RadioGroup>
  </FormControl>
);
