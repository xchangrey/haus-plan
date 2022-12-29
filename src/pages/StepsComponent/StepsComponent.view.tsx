import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CreateStepsProps } from "./StepsComponent.props";
import Foundation from "../../components/Foundation";
import Size from "../../components/Size";
import Floors from "../../components/Floors";
import RoomSpecifications from "../../components/RoomSpecifications";
import Roof from "../../components/Roof";
import Garden from "../../components/Garden";
import { SelectChangeEvent } from "@mui/material";
import { FormFields } from "../../types/Step";

interface Values {
  foundation : string;
  size : string;
  floors : number;
  roof: string;
  garden: string;
  isChanged?: boolean;
  roomSize: string| unknown;
  type: string | unknown;
  roomProperties: string[];
  floorType: string;
  windows: {
    windowId: string;
    style: string;
    glassType: string;
  }
}

const StepsComponentView = (props: CreateStepsProps) => {
  const { steps } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [roomProps, setRoomProps] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    foundation: "",
    size: "",
    floors: 0,
    roof: "",
    garden: "",
    roomSize: "",
    type: "",
    roomProperties: [],
    floorType: "",
    windows: {
      windowId: "",
      style: "",
      glassType: "",
    },

    isChanged: false,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setValues({...values, isChanged: false})
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setValues({
      ...values, 
      foundation: "",
      size: "",
      floors: 0,
      roof: "",
      garden: "",
      isChanged: false,
    });
  };

  const handleSelect = (event: SelectChangeEvent) => {
    console.log(event.target.name)
    setValues({...values, isChanged: true, [event.target.name as string]: event.target.value as string})
  };

  const handleMultipleSelect = (event: SelectChangeEvent<typeof roomProps>) => {
    const {
      target: { value },
    } = event;
    setRoomProps(typeof value === "string" ? value.split(",") : value);
  };

  if (!steps.length) return(
    <Box>
      Loading...
    </Box>
  );

  const getStepContent = (stepIndex: number, formFields: FormFields) => {
    const { roomSpecs } = formFields;
    switch (stepIndex) {
      case 0:
        return <Foundation 
          value={values.foundation} 
          onSelect={handleSelect} 
          {...formFields}
        />;
      case 1:
        return <Size 
          value={values.size} 
          onInput={handleSelect} 
          {...formFields}
        />;
      case 2:
        return <Floors 
          value={values.floors} 
          onSlide={handleSelect} 
          {...formFields}
        />;
      case 3:
        return <RoomSpecifications
          roomProperties={roomProps}
          roomSizeValue={values.roomSize}
          floorTypeValue={values.floorType}
          roomTypeValue={values.type}
          roomSpecs={roomSpecs}
          onInput={handleSelect}
          onSelect={handleSelect}
          onMultipleSelect={handleMultipleSelect}
        />
      case 4:
        return <Roof 
          value={values.roof} 
          onSelect={handleSelect} 
          {...formFields} 
        />
      case 5:
        return <Garden 
          value={values.garden} 
          onSelect={handleSelect} 
          {...formFields}
        />
      default:
        throw new Error('Step is not found.');
    }
  }

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({label, description, formFields}, index) => (
          <Step key={label}>
            <StepLabel
              optional={
                index === 5 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {label}
            </StepLabel>
            <StepContent>
              <Typography>{description}</Typography>
              <Box sx={{ mb: 2 }}>
                {getStepContent(index, formFields)}
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Button type='submit' sx={{ mt: 1, mr: 1 }}>
            Submit
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default StepsComponentView;