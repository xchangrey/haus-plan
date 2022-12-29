import React, { ChangeEvent } from "react";
import { FormControl, TextField } from "@mui/material";

type SizeProps = {
  name: string;
  value: string;
  label: string;
  isRequired: boolean;
  onInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Size = (props: SizeProps) => {
  const { name, onInput, value, isRequired, label } = props;

  return (
      <TextField
        required={isRequired}
        name={name}
        value={value}
        label={label}
        helperText="(size is in square meters)"
        onChange={onInput}
        fullWidth
      />
  );
}

export default Size;