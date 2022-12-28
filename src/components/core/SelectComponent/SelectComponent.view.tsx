import React from "react";
import { InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import { Selections } from "../../../types/Step";

type SelectProps = {
  name: string;
  label: string;
  selections: Selections | undefined;
  onSelect: (value: SelectChangeEvent) => void;
};

const SelectComponent = (props: SelectProps) => {
  const { label, name, selections, onSelect } = props;

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        onChange={onSelect}
      >
        {selections?.map((selection, index) => {
          return (
            <MenuItem key={index} value={selection}>{selection}</MenuItem>
          )
        })}
      </Select>
    </>
    
  )
}

export default SelectComponent;