import React, { useState } from "react";
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
import { Formik, Form, Field, ErrorMessage } from "formik";

// https://blog.logrocket.com/add-stepper-components-react-app/

const steps = [
  { label: "Add Product Details", icon: CgShoppingCart },
  { label: "Product Gallery", icon: TbLibraryPhoto },
  { label: "Product Categories", icon: TbCategory2 },
  { label: "Selling Prices", icon: TbReportMoney },
  { label: "Advance", icon: MdOutlineSettings },
];

// Validation schema for form fields
const validationSchema = Yup.object({
  productTitle: Yup.string().required("Product title is required"),
  description: Yup.string().required("Description is required"),
  productGallery: Yup.string().required("Product gallery is required"),
  productCategory: Yup.string().required("Product category is required"),
  productSubCategory: Yup.string().required("Product Subcategory is required"),
  productBrand: Yup.string().required("Product Brand is required"),
  sellingPrice: Yup.number()
    .typeError("Price must be a number")
    .required("Selling price is required"),
  advanceDetails: Yup.string().required("Advance details are required"),
});

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

  // Initial form values for all steps
  const initialValues = {
    productTitle: "",
    description: "",
    productGallery: "",
    productCategory: "",
    productSubCategory: "",
    productBrand: "",
    sellingPrice: "",
    advanceDetails: "",
  };

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
    // Do something with the form data here, such as an API call
  };

  return (
    <div className="w-full py-3 flex flex-row  gap-3  border-t-2 border-b-2 border-gray-300 border-dashed">
      {/* Stepper Section */}
      <div className="stepper  py-2 px-5 self-start border-e-2 border-dashed border-gray-300">
        <Stepper activeStep={currentStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              {renderStepLabel(step, index)}
              {/* <StepLabel className='cursor-pointer transition-all duration-100 hover:text-green-400' icon={renderStepIcon(step.icon, index)}>{step.label}</StepLabel> */}
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Formik form */}
      <div className="form-content py-2 px-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form>
              {currentStep === steps.length ? (
                <div>
                  <Typography variant="h6">All steps completed</Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  {/* Render the form content based on the current step */}
                  <FormContent currentStep={currentStep} />

                  <div className="stepper-buttons bg-green-500  ">
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
                      {currentStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Debug: Show current form values */}
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const FormContent = ({ currentStep }) => {
  switch (currentStep) {
    case 0:
      return (
        <div>
          <div className="form-group flex flex-col gap-2 mb-3">
            <label htmlFor="productTitle"  className="block mb-1 text-sm font-medium text-gray-700">
              Product Title <span className="text-red-600">*</span>
            </label>
            <Field
              type="text"
              id="productTitle"
              name="productTitle"
              placeholder="Enter product name"
              className="w-full border-2 border-gray-300 border-dashed rounded-lg p-2"
            />
            <ErrorMessage
              name="productTitle"
              component="div"
              className="error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700">Description <span className="text-red-600">*</span></label>
            <Field
              as="textarea"
              id="description"
              name="description"
              placeholder="Enter your message..."
              className="w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent"

            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600 text-sm mt-1"
            />

            {/* Help Text */}
            <p className="text-sm text-gray-500 mt-1">
              Improve product visibility by adding a compelling description.
            </p>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="form-group">
          <label htmlFor="productGallery"  className="block mb-1 text-sm font-medium text-gray-700">Product Gallery <span className="text-red-600">*</span></label>
          <Field
            type="text"
            id="productGallery"
            name="productGallery"
            placeholder="Add product gallery"
          />
          <ErrorMessage
            name="productGallery"
            component="div"
            className="error"
          />
        </div>
      );

    case 2:
      return (
        <>
          <div className="form-group">
            <label htmlFor="productCategory"  className="block mb-1 text-sm font-medium text-gray-700">
              Product Category <span className="text-red-600">*</span>
            </label>
            <Field
              type="text"
              id="productCategory"
              name="productCategory"
              placeholder="Enter product category"
            />
            <ErrorMessage
              name="productCategory"
              component="div"
              className="error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="productSubCategory"  className="block mb-1 text-sm font-medium text-gray-700">Product SubSubCategory <span className="text-red-600">*</span></label>
            <Field
              type="text"
              id="productSubCategory"
              name="productSubCategory"
              placeholder="Enter product SubCategory"
            />
            <ErrorMessage
              name="productSubCategory"
              component="div"
              className="error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ProductBrand"  className="block mb-1 text-sm font-medium text-gray-700">Product Brand <span className="text-red-600">*</span></label>
            <Field
              type="text"
              id="ProductBrand"
              name="ProductBrand"
              placeholder="Enter product category"
            />
            <ErrorMessage
              name="ProductBrand"
              component="div"
              className="error"
            />
          </div>
        </>
      );

    case 3:
      return (
        <>
          <div className="form-group">
            <label htmlFor="sellingPrice"  className="block mb-1 text-sm font-medium text-gray-700">Selling Price <span className="text-red-600">*</span></label>
            <Field
              type="number"
              id="sellingPrice"
              name="sellingPrice"
              placeholder="Enter selling price"
            />
            <ErrorMessage
              name="sellingPrice"
              component="div"
              className="error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="sellingPrice"  className="block mb-1 text-sm font-medium text-gray-700">Discount <span className="text-red-600">*</span></label>
            <Field
              type="number"
              id="Discount"
              name="Discount"
              placeholder="Enter selling price"
            />
            <ErrorMessage name="Discount" component="div" className="error" />
          </div>
        </>
      );

    case 4:
      return (
        <div className="form-group">
          <label htmlFor="advanceDetails"  className="block mb-1 text-sm font-medium text-gray-700">Advance <span className="text-red-600">*</span></label>
          <Field
            type="text"
            id="advanceDetails"
            name="advanceDetails"
            placeholder="Enter advance details"
          />
          <ErrorMessage
            name="advanceDetails"
            component="div"
            className="error"
          />
        </div>
      );

    default:
      return null;
  }
};

export default StepperTest;
