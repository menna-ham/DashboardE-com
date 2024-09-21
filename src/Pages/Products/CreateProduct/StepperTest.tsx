import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Button, Typography, StepIcon, Box } from '@mui/material';
import { CgFormatIndentIncrease, CgShoppingCart } from "react-icons/cg";
import { TbLibraryPhoto,TbCategory2 ,TbReportMoney } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";


// https://blog.logrocket.com/add-stepper-components-react-app/

const steps = [
  { label: "Add Product Details", icon: CgShoppingCart  },
  { label: "Product Gallery", icon: TbLibraryPhoto  },
  { label: "Product Categories", icon: TbCategory2  },
  { label: "Selling Prices", icon: TbReportMoney },
  { label: "Advance", icon: MdOutlineSettings  }
];


const StepperTest = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
  };
  const getIconColor = (index) => {
    if (index === currentStep) {
      return '#F98A6D'; // Active step color
    } else if (index < currentStep) {
      return '#544EAB'; // Completed step color
    } else {
      return '#9e9e9e'; // Inactive step color
    }
  };

  const renderStepIcon = (Icon, index) => {
    return (
      <Box
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: getIconColor(index),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          '&:hover': {
            backgroundColor: '#ff9800', // Change color on hover
            animation: 'spin 0.5s ease', // Shake on hover
          }
        }}
      >
        <Icon />
      </Box>
    );
  };
  const renderStepLabel = (step, index) => {
    return (
      <StepLabel
        sx={{
          cursor: 'pointer',
          transition: 'color 0.3s ease',
          '&:hover': {
            fontWeight:'bold !important',
            color: 'red !important', // Change text color on hover
          
          },
        }}
        icon={renderStepIcon(step.icon, index)}
      >
        {step.label}
      </StepLabel>
    );
  };

  return (
    <div className='container flex flex-row justify-evenly'>
      {/* Stepper Section */}
      <div className="stepper">
      <Stepper activeStep={currentStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              {renderStepLabel(step, index)}
              {/* <StepLabel className='cursor-pointer transition-all duration-100 hover:text-green-400' icon={renderStepIcon(step.icon, index)}>{step.label}</StepLabel> */}
            </Step>
          ))}
        </Stepper>
      </div>

      <div className="form-content">
        {currentStep === steps.length ? (
          <div>
            <Typography variant="h6">All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <FormContent currentStep={currentStep} />

            <div className="stepper-buttons">
              <Button
                disabled={currentStep === 0}
                onClick={handleBack}
                sx={{ mt: 2, mr: 1 }}
              >
                Back
              </Button>

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 2 }}
              >
                {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>


    </div>
  )
}

const FormContent = ({ currentStep }) => {
  switch (currentStep) {
    case 0:
      return (
        <div>
          <h2>Add Product Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="productTitle">Product Title *</label>
              <input type="text" id="productTitle" name="productTitle" placeholder="Enter product name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" placeholder="Enter your message..."></textarea>
            </div>
          </form>
        </div>
      );

    case 1:
      return <h2>Product Gallery</h2>;

    case 2:
      return <h2>Product Categories</h2>;

    case 3:
      return <h2>Selling Prices</h2>;

    case 4:
      return <h2>Advance</h2>;

    default:
      return null;
  }
};


export default StepperTest
