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
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import DragAndDropFileInput from './DragAndDropFileInput'

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
  productImage: Yup.string().required("Product Image is required"),
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
    productImage: "",
    productGallery: [],
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
      <div className="form-content py-2 px-3 w-full">
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
                  {/* Render the form content based on the current step */}
                  <FormContent currentStep={currentStep} />


                  <div className="stepper-buttons flex flex-row justify-end">
                    <Button
                      disabled={currentStep === 0}
                      onClick={handleBack}
                      sx={{ mt: 2, mr: 1 }}
                    >
                      Back
                    </Button>
                    {
                      currentStep === steps.length - 1 ? <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 2,
                          backgroundColor: '#6695EB ',
                          '&:hover': {
                            backgroundColor: '#544EAB', // Change background color on hover
                          },
                        }}
                      // className="bg-[#544EAB]"
                      >
                        Finish
                      </Button> : <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 2,
                          backgroundColor: '#F98A6D',
                          '&:hover': {
                            backgroundColor: '#544EAB', // Change background color on hover
                          },
                        }}
                      // className="bg-[#F98A6D]"
                      >
                        Next
                      </Button>
                    }
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
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0 }); // File information
  const { setFieldValue } = useFormikContext();

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  // Handler for dragging out of the input area
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  // Handler for dropping the file
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setFieldValue("productImage", file);  // Update Formik field value
      setPreview(URL.createObjectURL(file));  // Set image preview
      setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) });  // Set file info (KB)
    }
  };

  // Handle file input change
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("productImage", file);
      setPreview(URL.createObjectURL(file));
      setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) }); // Set file info
    }
  };



  switch (currentStep) {
    case 0:
      return (
        <div>
          <div className="form-group flex flex-col gap-2 mb-3">
            <label htmlFor="productTitle" className="block mb-1 text-sm font-medium text-gray-700">
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
              rows={'8'}
              className="w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent "

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

        <>
          <div className="form-group">
            <label htmlFor="productGallery" className="block mb-2 text-sm font-medium text-gray-700">
              Product Image <span className="text-red-600">*</span>
            </label>

            {/* <div
              className={`w-full border-2 ${dragActive ? 'border-blue-500' : 'border-dashed border-[#544EAB]'} rounded-lg bg-[#f7f6fb] p-6 text-center`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Field
                type="file"
                id="productGallery"
                name="productGallery"
                accept=".jpg,.png,.gif,.svg"
                className="hidden"
                onChange={handleChange}  // Listen for changes in file input
                value={""}
              />

              {!preview ? (
                // Placeholder when no image is selected
                <label htmlFor="productGallery" className="text-purple-500 cursor-pointer">
                  <img src="image-placeholder-url" alt="Image Upload" className="mx-auto mb-3" />
                  <p className="text-gray-700">Drag your image here, or <span className="text-green-500">browse</span></p>
                  <p className="text-gray-400">SVG, PNG, JPG or GIF</p>
                </label>
              ) : (
                // Display when an image is selected
                <div className="flex items-center justify-center">
                  <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md" />
                  <div className="ml-3">
                    <p className="text-sm font-semibold">{fileInfo.size} MB</p>
                    <p className="text-gray-500 text-sm truncate">{fileInfo.name}</p>
                  </div>
                </div>
              )}
            </div> */}
            <DragAndDropFileInput
              label="Product Image"
              name="productImage"
              placeholderImage="image-placeholder-url"
              accept=".jpg,.png,.gif,.svg"
            />

          </div>

          <div className="form-group mt-4">
            <label htmlFor="productGallery" className="block mb-2 text-sm font-medium text-gray-700">
              Product Gallery
            </label>

            <DragAndDropFileInput
              label="Product Gallery"
              name="productGallery"
              placeholderImage="gallery-placeholder-url"
              accept=".jpg,.png,.gif,.svg"
              multiple // Allow multiple files for gallery
            />

            {/* <div className="w-full border-2 border-dashed border-[#544EAB] rounded-lg bg-[#f7f6fb] p-6 text-center">
              <Field
                type="file"
                id="productGallery"
                name="productGallery"
                accept=".jpg,.png,.gif,.svg"
                multiple
                className="hidden"
              />

              <label htmlFor="productGallery" className="text-purple-500 cursor-pointer">
                <img src="image-placeholder-url" alt="Image Upload" className="mx-auto mb-3" />
                <p className="text-gray-700">Drag your Files here</p>
                <p className="text-gray-400">Add Product Gallery Images</p>
              </label>

              <ErrorMessage
                name="productGallery"
                component="div"
                className="text-red-600 mt-2 text-sm"
              />
            </div> */}
          </div>

        </>

      );

    case 2:
      return (
        <>
          <div className="form-group">
            <label htmlFor="productCategory" className="block mb-1 text-sm font-medium text-gray-700">
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
            <label htmlFor="productSubCategory" className="block mb-1 text-sm font-medium text-gray-700">Product SubSubCategory <span className="text-red-600">*</span></label>
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
            <label htmlFor="ProductBrand" className="block mb-1 text-sm font-medium text-gray-700">Product Brand <span className="text-red-600">*</span></label>
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
            <label htmlFor="sellingPrice" className="block mb-1 text-sm font-medium text-gray-700">Selling Price <span className="text-red-600">*</span></label>
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
            <label htmlFor="sellingPrice" className="block mb-1 text-sm font-medium text-gray-700">Discount <span className="text-red-600">*</span></label>
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
          <label htmlFor="advanceDetails" className="block mb-1 text-sm font-medium text-gray-700">Advance <span className="text-red-600">*</span></label>
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
