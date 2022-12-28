import React from "react";
import { FormControl, SelectChangeEvent } from "@mui/material";
import SelectComponent from "../core/SelectComponent";

const selections: string[] = ['Straw', 'Thatched', 'Tiled', 'Flat'];

type RoofProps = {
  name: string;
  onSelect: (event: SelectChangeEvent) => void;
}

const Roof = (props: RoofProps) => {
  const { name, onSelect } = props;
  return (
    <FormControl fullWidth>
      <SelectComponent
        name={name}
        label={"Roof type"}
        selections={selections}
        onSelect={onSelect}
      />
    </FormControl>
  );
}

export default Roof;