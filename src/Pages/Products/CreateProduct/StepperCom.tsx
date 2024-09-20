import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  StepContent,
  Paper,
} from '@mui/material';

const StepperCom = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'Add Product Details', content: 'Step 1: Enter product details.' },
    { label: 'Product Gallery', content: 'Step 2: Upload product images.' },
    { label: 'Product Categories', content: 'Step 3: Select product categories.' },
    { label: 'Selling Prices', content: 'Step 4: Set the selling price.' },
    { label: 'Advance', content: 'Step 5: Add metadata and inventory details.' }
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.content}</Typography>
              <div style={{ marginTop: '20px' }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  style={{ marginRight: '10px' }}
                  disabled={activeStep === steps.length - 1}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography>All steps completed - you&apos;re finished!</Typography>
          <Button onClick={handleReset} variant="outlined" style={{ marginTop: '10px' }}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default StepperCom;
