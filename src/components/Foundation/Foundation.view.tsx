import React from "react";
import { FormControl, SelectChangeEvent } from "@mui/material";
import SelectComponent from "../core/SelectComponent";
import FormComponent from "../core/FormComponent";

const selections: string[] | undefined = ['Brick', 'Slab', 'Reinforced concrete'];
type FoundationProps = {
  name: string;
  value: string;
  isRequired: boolean;
  errorMsg: string;
  submitForm: (event: any) => void;
  onSelect: (event: SelectChangeEvent) => void;
}

const Foundation = ({ 
  name, 
  onSelect, 
  submitForm, 
  value, 
  isRequired 
}: FoundationProps ) => {
  return (
    <FormComponent submitForm={submitForm}>
      <SelectComponent
        isRequired={isRequired}
        value={value}
        name={name}
        label={"Foundation"}
        selections={selections}
        onSelect={onSelect}
      />
    </FormComponent>
  );
}

export default Foundation;