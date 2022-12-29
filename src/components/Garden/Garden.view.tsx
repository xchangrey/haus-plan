import { FormControl, SelectChangeEvent } from "@mui/material";
import React from "react";
import { Selections } from "../../types/Step";
import SelectComponent from "../core/SelectComponent";

type GardenProps = {
  name: string;
  value: string;
  isRequired: boolean;
  onSelect: (event: SelectChangeEvent) => void;
}

const selections: Selections = ['Rose','Gumamela', 'Sunflower'];

const Garden = (props: GardenProps) => {
  const { name, onSelect, value, isRequired } = props;

  return (
    <SelectComponent
      isRequired={isRequired}
      value={value}
      name={name}
      label={"Garden"}
      selections={selections}
      onSelect={onSelect}
    />
  );
}

export default Garden;