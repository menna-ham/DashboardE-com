import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  StepIcon,
  Box,
} from "@mui/material";
import { CgFormatIndentIncrease, CgShoppingCart } from "react-icons/cg";
import { TbLibraryPhoto, TbCategory2, TbReportMoney } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import DragAndDropFileInput from "./DragAndDropFileInput";
import useFetch from "../../../utils/useFetch.tsx";
import CreateOptionCom from "./CreateOptionCom.tsx";
import { CgAddR } from "react-icons/cg";
import FormContent from "./FormContent.tsx";

// https://blog.logrocket.com/add-stepper-components-react-app/

const steps = [
  { label: "Add Product Details", icon: CgShoppingCart },
  { label: "Product Gallery", icon: TbLibraryPhoto },
  { label: "Product Categories", icon: TbCategory2 },
];

// Validation schema for form fields
const validationSchema = Yup.object({
  productTitle: Yup.string().required("Product title is required"),
  description: Yup.string().required("Description is required"),
  productImage: Yup.string().required("Product Image is required"),
  productGallery: Yup.string().required("Product gallery is required"),
  productCategory: Yup.string().required("Product category is required"),
  productSubCategory: Yup.string().required("Product Subcategory is required"),
  productBrand: Yup.string().required("Product Brand is required"),
  sellingPrice: Yup.number()
    .typeError("Price must be a number")
    .required("Selling price is required"),
  discount: Yup.number()
   .typeError("Discount must be a number")
   
});

const StepperTest = () => {
  const {data, loading, error, fetchData } = useFetch('get','Category/GetAllCategory')
  const {data:subData, loading:subLoad, error:SubErr, fetchData:fetSubCat } = useFetch('get','SubCategory/GetAllSubCategory')
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
      return "#F98A6D"; // Active step color
    } else if (index < currentStep) {
      return "#544EAB"; // Completed step color
    } else {
      return "#9e9e9e"; // Inactive step color
    }
  };

  const renderStepIcon = (Icon, index) => {
    return (
      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: getIconColor(index),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          "&:hover": {
            backgroundColor: "#ff9800", // Change color on hover
            animation: "spin 0.5s ease", // Shake on hover
          },
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
          cursor: "pointer",
          transition: "color 0.3s ease",
          fontWeight: "semiBold !important",
          "&:hover": {
            fontWeight: "bold !important",
            color: "red !important", // Change text color on hover
          },
        }}
        icon={renderStepIcon(step.icon, index)}
      >
        {step.label}
      </StepLabel>
    );
  };

  const initialValues = {
    productTitle: "",
    sellingPrice: "",
    discount:'',
    description: "",
    productImage: "",
    productGallery: [],
    productCategory: "",
    productSubCategory: "",
    productBrand: "",
  };

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  useEffect(() => {
    fetchData()
    fetSubCat()
  }, [])

  return (
    <div className="w-full py-3 flex flex-row  gap-3  border-t-2 border-b-2 border-gray-300 border-dashed">
      <div className="stepper  py-2 px-5 self-start ">
        <Stepper activeStep={currentStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              {renderStepLabel(step, index)}
            </Step>
          ))}
        </Stepper>
      </div>

      <div className="form-content py-2 px-3 w-full border-s-2 border-dashed border-gray-300">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form className="">
              {currentStep === steps.length ? (
                <div>
                  <Typography variant="h6">All steps completed</Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <FormContent currentStep={currentStep} />

                  <div className="stepper-buttons flex flex-row justify-end pt-2">
                    <Button
                      disabled={currentStep === 0}
                      onClick={handleBack}
                      sx={{ mt: 2, mr: 1 }}
                      className='text-[#544EAB]'
                    >
                      Back
                    </Button>
                    {currentStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 2,
                          backgroundColor: "#6695EB ",
                          "&:hover": {
                            backgroundColor: "#544EAB", 
                          },
                        }}
                      >
                        Finish
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 2,
                          backgroundColor: "#F98A6D",
                          "&:hover": {
                            backgroundColor: "#544EAB", 
                          },
                        }}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              )}
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};



export default StepperTest;
