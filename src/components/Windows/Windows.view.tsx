import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

interface WindowsProp {
  windowId: string;
}

const windowStyles = ['Bay', 'Flat', 'Full height'];
const glassType = ['Tempered', 'Triple glazed', 'Double glazed'];

const WindowsView = ({ windowId } : WindowsProp) => {
  return (
    <Box>
      <Typography></Typography>
        <FormControl required fullWidth>
          <InputLabel>{'oomSpecs?.floorType.label'}</InputLabel>
          <Select
            id={`style${windowId}`}
            name={'roomSpecs?.floorType.name'}
            label={'roomSpecs?.floorType.label'}
            value={'floorTypeValue'}
            fullWidth
          >
            {windowStyles.map((selection, index) => {
              return (
                <MenuItem key={index} value={selection.toLowerCase()}>{selection}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <FormControl required fullWidth>
          <InputLabel>{'oomSpecs?.floorType.label'}</InputLabel>
          <Select
            id={`glass${windowId}`}
            name={'roomSpecs?.floorType.name'}
            label={'roomSpecs?.floorType.label'}
            value={'floorTypeValue'}
            fullWidth
          >
            {glassType.map((selection, index) => {
              return (
                <MenuItem key={index} value={selection.toLowerCase()}>{selection}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
    </Box>
  );
}

export default WindowsView;