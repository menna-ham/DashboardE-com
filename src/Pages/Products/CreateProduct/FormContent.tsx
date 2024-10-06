import React, { useEffect, useState } from 'react'
import { CgFormatIndentIncrease, CgShoppingCart } from "react-icons/cg";
import { TbLibraryPhoto, TbCategory2, TbReportMoney } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import DragAndDropFileInput from "./DragAndDropFileInput";
import useFetch from "../../../utils/useFetch.tsx";
import CreateOptionCom from "./CreateOptionCom.tsx";
import { CgAddR } from "react-icons/cg";
import ModalComponent from '../../../components/Modals/ModalComponent/ModalComponent.tsx';
import { BrandInput, BrandsinitialValues, CategoryInitialValues, CategoryInput, SubCategoryInitialValues, SubCategoryInput } from '../../../utils/inputsFeilds.js';

const FormContent = ({ currentStep }) => {
    const {data:catData, loading, error, fetchData } = useFetch('get','Category/GetAllCategory')
    const {data:subData, loading:subLoad, error:SubErr, fetchData:fetSubCat } = useFetch('get','SubCategory/GetAllSubCategory')
    const { setFieldValue } = useFormikContext();
    let [modalIsOpen, setIsOpen] = useState(false);
    let [categories, setCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);
  
    let openModal=()=> {
      setIsOpen(true);
    }
  
    let handleSelectChange =(e:any)=>{
      console.log('heelo',e)
      setFieldValue('productCategory',e)
      if(e=='addNew')
      {
        setIsOpen(true);
      }
    }

    let settingVals = ()=>{
      if(catData){
        setCategories(catData.results?.items)
        console.log(categories)
      }
      if(subData){
        setSubCategories(subData.results.items)
      }
    }
    

    useEffect(()=>{
      fetchData()
      fetSubCat()
      settingVals()
    },[])
  
  
    switch (currentStep) {
      case 0:
        return (
          <div>
            <div className="form-group flex flex-col gap-2 mb-3">
              <label
                htmlFor="productTitle"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Product Title <span className="text-red-600">*</span>
              </label>
              <Field
                type="text"
                id="productTitle"
                name="productTitle"
                placeholder="Enter product name"
                className="w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent"
              />
              <ErrorMessage
                name="productTitle"
                component="div"
                className="error"
              />
            </div>
  
            <div className="form-group">
              <label
                htmlFor="description"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Description <span className="text-red-600">*</span>
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Enter your message..."
                rows={"8"}
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
          <div className="flex flex-col gap-3 justify-center">
            {/* <div className="form-group">
              <label htmlFor="productGallery" className="block mb-2 text-sm font-medium text-gray-700">
                Product Image <span className="text-red-600">*</span>
              </label> */}
  
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
            {/* <DragAndDropFileInput
                label="Product Image"
                name="productImage"
                placeholderImage="image-placeholder-url"
                accept=".jpg,.png,.gif,.svg"
              /> */}
            <DragAndDropFileInput
              label="Upload Product Image"
              name="productImage" // Field for product image
              galleryFieldName="productImage" // Field for product gallery
              accept=".jpg,.png,.gif,.svg"
              placeholderImage="https://via.placeholder.com/150" // Placeholder image for drag-and-drop area
              multiple={false} // Single file upload for product image
            />
            <ErrorMessage
              name="productImage"
              component="div"
              className="text-red-600"
            />
  
            {/* </div> */}
  
            {/* <div className="form-group mt-4">
              <label htmlFor="productGallery" className="block mb-2 text-sm font-medium text-gray-700">
                Product Gallery
              </label> */}
  
            {/* <DragAndDropFileInput
                label="Product Gallery"
                name="productGallery"
                placeholderImage="gallery-placeholder-url"
                accept=".jpg,.png,.gif,.svg"
                multiple // Allow multiple files for gallery
              /> */}
            <DragAndDropFileInput
              label="Upload Product Gallery"
              name="productGallery" // Still use productImage to drag an image, but append to the gallery
              galleryFieldName="productGallery" // The gallery field
              accept=".jpg,.png,.gif,.svg"
              placeholderImage="https://via.placeholder.com/150"
              multiple={true} // Multiple file upload for product gallery
            />
  
            <ErrorMessage
              name="productGallery"
              component="div"
              className="text-red-600"
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
            {/* </div> */}
          </div>
        );
  
      case 2:
        return (
          <>
            <div className="form-group gap-3">
              <label
                htmlFor="productCategory"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Product Category <span className="text-red-600">*</span>
              </label>
              <div className='flex flex-row items-center gap-2 justify-between'>
              <div className='flex flex-col gap-2 w-full'>

              <Field
                onChange={(e)=>handleSelectChange(e.target.value)}
                as={'select'}
                id="productCategory"
                name="productCategory"
                placeholder="Enter product category"
                className={`w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent`}
              >
                {/* {
                  categories.length!==0?categories.map((c)=><option value={c}>{c.name}</option>):<option value='...'>create new one</option>
                } */}
                <option value='...'>create new one</option>
              </Field>
              <ErrorMessage
                name="productCategory"
                component="div"
                className="error"
              />
              </div>

              <button onClick={()=>{openModal(); console.log('button clicked')}} type='button' className='p-2 text-sm bg-gray-100 rounded-lg flex flex-row items-center justify-center  text-[#ff9800] hover:bg-[#544EAB] hover:text-white transition-all duration-100'><CgAddR className="me-2"/> Create New Category</button>
              </div>
            </div>

            {modalIsOpen&& <ModalComponent inputs={CategoryInput} subtitle='Category' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='Catgeory/CreateCategory' initialValues={CategoryInitialValues} />}
  
            <div className="form-group">
              <label
                htmlFor="productSubCategory"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Product SubSubCategory <span className="text-red-600">*</span>
              </label>
              <div className='flex flex-row items-center gap-2 justify-between'>

                <div className='flex flex-col gap-1 w-full'>

              <Field
                as={'select'}
                onChange={(e)=>handleSelectChange(e.target.value)}
                type="text"
                id="productSubCategory"
                name="productSubCategory"
                placeholder="Enter product SubCategory"
                className={`w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent`}
              >
                <option value='...'>create new one</option>
              </Field>
              <ErrorMessage
                name="productSubCategory"
                component="div"
                className="error"
              />
                </div>

                <button onClick={()=>{openModal(); console.log('button clicked')}} type='button' className='p-2 text-sm bg-gray-100 rounded-lg flex flex-row items-center justify-center  text-[#ff9800] hover:bg-[#544EAB] hover:text-white transition-all duration-100'><CgAddR className="me-2"/> Create New Sub-Category</button>
              </div>

            {modalIsOpen&& <ModalComponent inputs={SubCategoryInput} subtitle='SubCategory' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='SubCategory/CreateSubCategory' initialValues={SubCategoryInitialValues} />}
            {/* {modalIsOpen&&<CreateOptionCom type='SubCategory'/>} */}
            </div>


            <div className="form-group">
              <label
                htmlFor="ProductBrand"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Product Brand <span className="text-red-600">*</span>
              </label>
              
              <div className='flex flex-row items-center gap-2 justify-between'>

              <div className='flex flex-col gap-1 w-full'>

              <Field
              onChange={(e)=>handleSelectChange(e.target.value)}
                as='select'
                type="text"
                id="ProductBrand"
                name="ProductBrand"
                placeholder="Enter product category"
                className={`w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent`}
              >
                <option></option>
              </Field>
              <ErrorMessage
                name="ProductBrand"
                component="div"
                className="error"
              />
              </div>
              <button onClick={()=>{openModal(); console.log('button clicked')}} type='button' className='p-2 text-sm bg-gray-100 rounded-lg flex flex-row items-center justify-center  text-[#ff9800] hover:bg-[#544EAB] hover:text-white transition-all duration-100'><CgAddR className="me-2"/> Create New Brand</button>

              </div>
            </div>
            {modalIsOpen&& <ModalComponent inputs={BrandInput} subtitle='Brand' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='Brand/CreateBrand' initialValues={BrandsinitialValues} />}
            {/* {modalIsOpen&&<CreateOptionCom type='Brand'/>} */}
          </>
        );
  
      case 3:
        return (
          <>
            <div className="form-group">
              <label
                htmlFor="sellingPrice"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Selling Price <span className="text-red-600">*</span>
              </label>
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
              <label
                htmlFor="sellingPrice"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Discount <span className="text-red-600">*</span>
              </label>
              <Field
                type="number"
                id="Discount"
                name="Discount"
                placeholder="Enter selling price"
              />
              <ErrorMessage name="Discount" component="div" className="error" />
            </div>
            {modalIsOpen&&<CreateOptionCom type='category'/>}
          </>
        );
  
      case 4:
        return (
          <div className="form-group">
            <label
              htmlFor="advanceDetails"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Advance <span className="text-red-600">*</span>
            </label>
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

export default FormContent
