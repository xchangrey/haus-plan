import React from "react";
import { SelectChangeEvent } from "@mui/material";
import SelectComponent from "../core/SelectComponent";

const selections: string[] = ['Straw', 'Thatched', 'Tiled', 'Flat'];

type RoofProps = {
  name: string;
  value: string;
  label: string;
  isRequired: boolean;
  onSelect: (event: SelectChangeEvent) => void;
}

const Roof = (props: RoofProps) => {
  const { name, value, onSelect, isRequired, label } = props;
  return (
    <SelectComponent
      isRequired={isRequired}
      value={value}
      name={name}
      label={label}
      selections={selections}
      onSelect={onSelect}
    />
  );
}

export default Roof;