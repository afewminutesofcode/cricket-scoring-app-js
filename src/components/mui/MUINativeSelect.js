import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const MUINativeSelect = (props) => {
  const {
    disabled = false,
    defaultValue,
    id,
    name,
    handleChange,
    label,
    fullWidth = false,
    options,
    required = false,
    value
  } = props;
  return (
    <FormControl
      variant="outlined"
      className={"marginBottom10"}
      style={fullWidth ? { width: "100%" } : {}}
      disabled={disabled}
    >
      <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
      <Select
        defaultValue={defaultValue}
        native
        value={value}
        onChange={handleChange}
        label={label}
        required={required}
        inputProps={{
          name: name,
          id: id
        }}
      >
        {options.map((item) => (
          <option disabled={disabled} key={item.value} aria-label={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
