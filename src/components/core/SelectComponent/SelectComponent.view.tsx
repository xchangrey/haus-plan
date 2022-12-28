import React from "react";
import { InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import { Selections } from "../../../types/Step";

type SelectProps = {
  name: string;
  label: string;
  value: string;
  selections: Selections;
  onSelect: (value: SelectChangeEvent) => void;
};

const SelectComponent = (props: SelectProps) => {
  const { label, name, value, selections, onSelect } = props;

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
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