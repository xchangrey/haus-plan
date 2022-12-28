import { FormControl, SelectChangeEvent } from "@mui/material";
import React from "react";
import { Selections } from "../../types/Step";
import SelectComponent from "../core/SelectComponent";

type GardenProps = {
  name: string;
  onSelect: (event: SelectChangeEvent) => void;
}

const selections: Selections = ['Rose','Gumamela', 'Sunflower'];

const Garden = (props: GardenProps) => {
  const { name, onSelect } = props;

  return (
    <FormControl fullWidth>
      <SelectComponent
        name={name}
        label={"Garden"}
        selections={selections}
        onSelect={onSelect}
      />
    </FormControl>
  );
}

export default Garden;