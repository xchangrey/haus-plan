import React from "react";
import { FormControl, SelectChangeEvent } from "@mui/material";
import SelectComponent from "../core/SelectComponent";

const selections: string[] | undefined = ['Brick', 'Slab', 'Reinforced concrete'];
type FoundationProps = {
  name: string;
  onSelect: (event: SelectChangeEvent) => void;
}

const Foundation = (props: FoundationProps) => {
  const { name, onSelect } = props;

  return (
    <FormControl fullWidth>
      <SelectComponent
        name={name}
        label={"Foundation"}
        selections={selections}
        onSelect={onSelect}
      />
    </FormControl>
  );
}

export default Foundation;