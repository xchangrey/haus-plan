import React, { ChangeEvent } from "react";
import { FormControl, TextField } from "@mui/material";

type SizeProps = {
  name: string;
  value: string;
  onInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Size = (props: SizeProps) => {
  const { name, onInput, value } = props;

  return (
    <FormControl fullWidth>
      <TextField
        name={name}
        value={value}
        id="Size" 
        label="House size" 
        variant="outlined" 
        helperText="(size is in square meters)"
        onChange={onInput}
      />
    </FormControl>
  );
}

export default Size;