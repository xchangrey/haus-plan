import React from "react";
import { FormControl, SelectChangeEvent } from "@mui/material";
import SelectComponent from "../core/SelectComponent";

const selections: string[] = ['Straw', 'Thatched', 'Tiled', 'Flat'];

type RoofProps = {
  name: string;
  value: string;
  onSelect: (event: SelectChangeEvent) => void;
}

const Roof = (props: RoofProps) => {
  const { name, value, onSelect } = props;
  return (
    <FormControl fullWidth>
      <SelectComponent
        value={value}
        name={name}
        label={"Roof type"}
        selections={selections}
        onSelect={onSelect}
      />
    </FormControl>
  );
}

export default Roof;