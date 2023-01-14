import React from "react";
import Box from '@mui/material/Box';

type FormProps = {
  children: JSX.Element;
}

const FormComponent = ({ children }: FormProps ) => {
  return (
    <Box component="form">
      {children}
    </Box>
  )
}

export default FormComponent;