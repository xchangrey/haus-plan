import React from "react";
import { Box, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import FormComponent from "../core/FormComponent";
import { RoomSpecs, Selections } from "../../types/Step";

type RoomSpecsProps = {
  roomSpecs?: RoomSpecs;
  values: string[];
  submitForm: (event: any) => void;
  onSelect: (event: SelectChangeEvent<string[]>) => void;
}

const floorTypes: Selections = ['None', 'Wood', 'Carpet'];
const roomTypes: Selections = ['None','Bedroom', 'Lounge', 'Diner', 'Kitchen', 'Bathroom', 'Office'];
const roomProperties: Selections = ['None','Office desk', 'Bed', 'Desk plant', 'Airconditioner', 'Closet', 'Side table', 'Sofa'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const RoomSpecifications = ({ 
  submitForm, onSelect, roomSpecs, values} : RoomSpecsProps) => {
  return (
    <FormComponent submitForm={submitForm}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            name={roomSpecs?.roomSize.name}
            label={roomSpecs?.roomSize.label}
            fullWidth
            helperText="(size is in square meters)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl required fullWidth>
            <InputLabel>{roomSpecs?.type.label}</InputLabel>
            <Select
              name={roomSpecs?.type.name}
              label={roomSpecs?.type.label}
              fullWidth
            >
              {roomTypes?.map((selection, index) => {
                return (
                  <MenuItem key={index} value={selection.toLowerCase()}>{selection}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl required fullWidth>
          <InputLabel>{roomSpecs?.floorType.label}</InputLabel>
            <Select
              name={roomSpecs?.floorType.name}
              label={roomSpecs?.floorType.label}
              fullWidth
            >
              {floorTypes?.map((selection, index) => {
                return (
                  <MenuItem key={index} value={selection.toLowerCase()}>{selection}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl required fullWidth>
            <InputLabel>{roomSpecs?.roomProperties.label}</InputLabel>
            <Select
              label={roomSpecs?.roomProperties.label}
              value={values}
              multiple
              input={<OutlinedInput label={roomSpecs?.roomProperties.name} />}
              renderValue={(selected: string[]) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              onChange={onSelect}
              MenuProps={MenuProps}
            >
              {roomProperties?.map((selection, index) => {
                return (
                  <MenuItem key={index} value={selection.toLowerCase()}>{selection}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </FormComponent>
  );
}

export default RoomSpecifications;