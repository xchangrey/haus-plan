import React from "react";
import { SelectChangeEvent } from "@mui/material";
import SelectComponent from "../core/SelectComponent";
import FormComponent from "../core/FormComponent";

const selections: string[] | undefined = ['Brick', 'Slab', 'Reinforced concrete'];

type FoundationProps = {
  name: string;
  value: string;
  label: string;
  isRequired: boolean;
  errorMsg: string;
  onSelect: (event: SelectChangeEvent) => void;
}

const Foundation = ({ 
  name, 
  onSelect, 
  value, 
  label,
  isRequired 
}: FoundationProps ) => {
  return (
    <FormComponent>
      <SelectComponent
        isRequired={isRequired}
        value={value}
        name={name}
        label={label}
        selections={selections}
        onSelect={onSelect}
      />
    </FormComponent>
  );
}

export default Foundation;