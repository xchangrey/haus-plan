import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import StepsComponent from "../pages/StepsComponent";
import Navbar from "./Navbar";

export default function App() {
  console.log("rerender");
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm">
        <StepsComponent />
      </Container>
    </div>
  )
}