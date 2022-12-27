import React from "react";
import StepsComponent from "../pages/StepsComponent";

export default function App() {
  console.log("rerender");
  return (
    <div>
      <StepsComponent />
    </div>
  )
}