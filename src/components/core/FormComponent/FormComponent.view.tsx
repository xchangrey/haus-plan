import React from "react";
import Box from '@mui/material/Box';

type FormProps = {
  submitForm: (event: any) => void;
  children: JSX.Element;
}

const FormComponent = ({ submitForm, children }: FormProps ) => {
  return (
    <Box onSubmit={submitForm} component="form">
      {children}
    </Box>
  )
}

export default FormComponent;