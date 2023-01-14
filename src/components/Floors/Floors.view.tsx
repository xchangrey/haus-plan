import React from "react";
import { FormControl, Slider } from "@mui/material";

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

const valueText = (num: number) => num.toString();
type FloorsProps = {
  name: string;
  value: number;
  onSlide: (event: any) => void;
}
 
const Floors = (props: FloorsProps) => {
  const { onSlide, name, value } = props;

  return (
    <FormControl fullWidth>
      <Slider 
        name={name}
        value={value}
        getAriaValueText={valueText}
        valueLabelDisplay="auto"
        step={1}
        max={5}
        marks={marks}
        onChange={onSlide}
      />
    </FormControl>
  );
}

export default Floors;