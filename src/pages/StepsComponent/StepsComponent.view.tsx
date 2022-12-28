import React, { FormEvent, useState } from "react";
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

type Values = {
  foundation : string;
  size : string;
  floors : number | undefined;
  roof: string;
  garden: string;
  isChanged?: boolean;
}

const StepsComponentView = (props: CreateStepsProps) => {
  const { steps } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState<Values>({
    foundation: "",
    size: "",
    floors: 0,
    roof: "",
    garden: "",
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values)
  }

  if (!steps.length) return(
    <Box>
      Loading...
    </Box>
  );

  const handleSelect = (event: SelectChangeEvent) => {
    setValues({...values, isChanged: true, [event.target.name as string]: [event.target.value as string]})
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <Foundation name="foundation" onSelect={handleSelect} />;
      case 1:
        return <Size name="size" onInput={handleSelect} />;
      case 2:
        return <Floors name="floors" onSlide={handleSelect} />;
      case 3:
        return <RoomSpecifications />
      case 4:
        return <Roof name="roof" onSelect={handleSelect} />
      case 5:
        return <Garden name="garden" onSelect={handleSelect} />
      default:
        throw new Error('Step is not found.');
    }
  }

  return (
    <Box component='form' onSubmit={(e) => handleSubmit(e)}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 5 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                {getStepContent(index)}
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