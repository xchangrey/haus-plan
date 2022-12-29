import React from "react";
import { Box, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import FormComponent from "../core/FormComponent";
import { RoomSpecs, Selections } from "../../types/Step";

type RoomSpecsProps = {
  roomSpecs?: RoomSpecs;
  roomProperties: string[];
  roomSizeValue: string | unknown;
  floorTypeValue: string | unknown;
  roomTypeValue: string | unknown;
  onInput: (event: any) => void;
  onSelect: (event: any) => void;
  onMultipleSelect: (event: SelectChangeEvent<string[]>) => void;
}

const floorTypes: Selections = ['Wood', 'Carpet'];
const roomTypes: Selections = ['Bedroom', 'Lounge', 'Diner', 'Kitchen', 'Bathroom', 'Office'];
const properties: Selections = ['Office desk', 'Bed', 'Desk plant', 'Airconditioner', 'Closet', 'Side table', 'Sofa'];

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
    roomSpecs, 
    roomProperties, 
    floorTypeValue, 
    roomTypeValue,
    roomSizeValue,
    onSelect, 
    onInput,
    onMultipleSelect
  } : RoomSpecsProps) => {
  return (
    <FormComponent>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={roomSizeValue}
            name={roomSpecs?.roomSize.name}
            label={roomSpecs?.roomSize.label}
            fullWidth
            onChange={onInput}
            helperText="(size is in square meters)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl required fullWidth>
            <InputLabel>{roomSpecs?.type.label}</InputLabel>
            <Select
              name={roomSpecs?.type.name}
              label={roomSpecs?.type.label}
              value={roomTypeValue}
              fullWidth
              onChange={onSelect}
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
              value={floorTypeValue}
              fullWidth
              onChange={onSelect}
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
              value={roomProperties}
              multiple
              input={<OutlinedInput label={roomSpecs?.roomProperties.name} />}
              renderValue={(selected: string[]) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              onChange={onMultipleSelect}
              MenuProps={MenuProps}
            >
              {properties?.map((selection, index) => {
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