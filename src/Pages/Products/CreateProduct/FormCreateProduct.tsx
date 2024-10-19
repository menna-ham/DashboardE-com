import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import DragAndDropFileInput from "./DragAndDropFileInput.jsx";
import useFetch from "../../../utils/useFetch.tsx";
import CreateOptionCom from "./CreateOptionCom.tsx";
import { CgAddR } from "react-icons/cg";
import ModalComponent from '../../../components/Modals/ModalComponent/ModalComponent.tsx';
import { BrandInput, BrandsinitialValues, CategoryInitialValues, CategoryInput, SubCategoryInitialValues, SubCategoryInput } from '../../../utils/inputsFeilds.js';

// type CategoryItem = {
//   nameAR: string;
//   nameEN: string;
//   photoPath: string;
//   id: string;
//   createBy: string;
//   modifyBy: string | null;
//   deletedBy: string | null;
//   createAt: string;
//   modifyAt: string | null;
//   deletedAt: string | null;
//   isActive: boolean;
//   isDeleted: boolean;
// };

// type Result = {
//   items: CategoryItem[];
//   total: number;
// };

// type ApiResponse = {
//   result: Result;
//   isSuccess: boolean;
//   message: string;
// };

const FormCreateProduct = ({ currentStep,values, subCategories, Brands, categories }) => {
// const FormCreateProduct = ({ currentStep,values}) => {
  // const { data: catData, loading, error, fetchData } = useFetch('get', 'Category/GetAllCategory')
  // const { data: subData, loading: subLoad, error: SubErr, fetchData: fetSubCat } = useFetch('get', 'SubCategory/GetAllSubCategory')
  // const { data: BrandData, loading: BrandLoad, error: BrandErr, fetchData: fetBrand } = useFetch('get', 'Brand/GetAllBrand')
  // let [categories, setCategories] = useState([]);
  // let [subCategories, setSubCategories] = useState([]);
  // let [Brands, setBrands] = useState([]);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [subCategoryModalOpen, setSubCategoryModalOpen] = useState(false);
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  const openCategoryModal = () => setCategoryModalOpen(true);
  const closeCategoryModal = () => setCategoryModalOpen(false);

  const openSubCategoryModal = () => setSubCategoryModalOpen(true);
  const closeSubCategoryModal = () => setSubCategoryModalOpen(false);

  const openBrandModal = () => setBrandModalOpen(true);
  const closeBrandModal = () => setBrandModalOpen(false);

  // console.log('cat', categories);
  // console.log('brands', Brands);
  // console.log('sub', subCategories);
  // console.log('values',values)
  
  // let settingVals = () => {
  //   console.log('cat', categories);
  //   if (catData?.result) {
  //     setCategories(catData.result.items);
  //     // console.log('cat', categories);
  //   }
  //   if (subData?.result) {
  //     setSubCategories(subData.result.items);
  //     // console.log('Subcat', subCategories);
  //   }
  //   if (BrandData?.result) {
  //     setBrands(BrandData.result.items);
  //     // console.log('brands', Brands);
  //   }
  // };

  // console.log(catData)


  // useEffect(() => {
  //   fetchData()
  //   fetSubCat()
  //   fetBrand()
  //   settingVals()
  //   console.log('cat', categories);
  // }, [])

  // useEffect(() => {
  //   fetchData()
  //   fetSubCat()
  //   fetBrand()
  //   settingVals()
  //   // console.log('cat', categories);
  // }, [categoryModalOpen, subCategoryModalOpen, brandModalOpen])


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
              className="error text-red-600 text-sm mt-1"
            />
          </div>

          <div className="form-group my-2">
            <div className="flex flex-row justify-between items-center w-full gap-2 my-2">
              <div className="form-group w-full">
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
                  className="w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent"
                />
              </div>
              <div className="form-group w-full">
                <label
                  htmlFor="discount"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Discount <span className="text-red-600">*</span>
                </label>
                <Field
                  type="number"
                  id="discount"
                  name="discount"
                  placeholder="Enter discount"
                  className="w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent"
                />
              </div>

            </div>

            <div className='className="flex flex-row justify-between items-center w-full gap-2 my-2"'>
              <ErrorMessage
                name="sellingPrice"
                component="div"
                className="error text-red-600 text-sm mt-1"
              />

              <ErrorMessage name="Discount" component="div" className="error text-red-600 text-sm mt-1" />
            </div>

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

            <p className="text-sm text-gray-500 mt-1">
              Improve product visibility by adding a compelling description.
            </p>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="flex flex-col gap-3 justify-center">

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
            className="text-red-600 text-sm mt-1"
          />
          <DragAndDropFileInput
            label="Upload Product Gallery"
            name="productGallery"
            galleryFieldName="productGallery"
            accept=".jpg,.png,.gif,.svg"
            placeholderImage="https://via.placeholder.com/150"
            multiple={true}
          />

          <ErrorMessage
            name="productGallery"
            component="div"
            className="text-red-600 text-sm mt-1"
          />

        </div>
      );

    case 2:
      return (
        <>
          <div className="form-group gap-3 my-2">
            <label
              htmlFor="productCategory"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Product Category <span className="text-red-600">*</span>
            </label>
            <div className='flex flex-col gap-1 '>
              <div className='flex flex-row items-center gap-3 justify-between w-full'>

                <Field
                  // onChange={(e) => console.log(e.target.value)}
                  as={'select'}
                  id="productCategory"
                  name="productCategory"
                  placeholder="Enter product category"
                  className={`w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent`}
                >
                  <option defaultValue={'...'} >Choose Category</option>
                  {
                    // catData.result.items.length !== 0 ? categories.map((c) => <option value={c}>{c.nameAR}</option>) : <option value='...'>Create New Category</option>
                    categories.length !== 0 ? categories.map((c) => <option value={c.id}>{c.nameAR}</option>) : <option value='...'>Create New Category</option>
                  }
                  {/* <option value='...'>create new one</option> */}
                </Field>
                <div className="w-[20%] m-auto">
                  <button
                    onClick={openCategoryModal}
                    type="button"
                    className="w-full p-2 py-3 font-semibold text-sm bg-gray-100 rounded-lg flex flex-row items-center justify-center m-auto text-[#ff9800] hover:bg-[#544EAB] hover:text-white transition-all duration-100"
                  >
                    <CgAddR className="me-2 w-[14px]" /> New Category
                  </button>
                </div>

              </div>

              <div className='w-full'>

                <ErrorMessage
                  name="productCategory"
                  component="div"
                  className="error text-sm text-red-600"
                />
              </div>

            </div>
          </div>

          {categoryModalOpen && (
            <ModalComponent
              inputs={CategoryInput}
              subtitle="Category"
              isOpen={categoryModalOpen}
              setIsOpen={closeCategoryModal}
              path="Category/CreateCategory"
              initialValues={CategoryInitialValues}
            />
          )}

          {/* {modalIsOpen && <ModalComponent inputs={CategoryInput} subtitle='Category' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='Catgeory/CreateCategory' initialValues={CategoryInitialValues} />} */}

          <div className="form-group mb-2">
            <label
              htmlFor="productSubCategory"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Product SubSubCategory <span className="text-red-600">*</span>
            </label>

            <div className='flex flex-col gap-1 justify-between'>
              <div className='flex flex-row items-center gap-3 justify-between'>

                <Field
                  as={'select'}
                  // onChange={(e) => handleSelectChange(e.target.value)}
                  type="text"
                  id="productSubCategory"
                  name="productSubCategory"
                  placeholder="Enter product SubCategory"
                  className={`w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent`}
                >
                  <option selected defaultValue='...'>Choose SubCategory</option>
                  {
                    subCategories.length !== 0 ? subCategories.map((s) => <option value={s.id}>{s.nameAR}</option>) : <option value='...'>Create New Sub-Category</option>
                  }
                </Field>

                <div className="w-[20%]">
                  <button
                    onClick={openSubCategoryModal}
                    type="button"
                    className="w-full p-2 py-3 font-semibold text-sm bg-gray-100 rounded-lg flex flex-row items-center justify-center m-auto text-[#ff9800] hover:bg-[#544EAB] hover:text-white transition-all duration-100"
                  >
                    <CgAddR className="me-2" /> New Sub-Category
                  </button>
                </div>
              </div>
              <div className='w-full'>
                <ErrorMessage
                  name="productSubCategory"
                  component="div"
                  className="error text-sm text-red-600"
                />

              </div>
            </div>
            {subCategoryModalOpen && (
              <ModalComponent
                inputs={SubCategoryInput}
                subtitle="SubCategory"
                isOpen={subCategoryModalOpen}
                setIsOpen={closeSubCategoryModal}
                path="SubCategory/CreateSubCategory"
                initialValues={SubCategoryInitialValues}
              />
            )}
            {/* 
            {modalIsOpen && <ModalComponent inputs={SubCategoryInput} subtitle='SubCategory' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='SubCategory/CreateSubCategory' initialValues={SubCategoryInitialValues} />} */}
          </div>


          <div className="form-group">
            <label
              htmlFor="ProductBrand"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Product Brand <span className="text-red-600">*</span>
            </label>

            <div className='flex flex-col gap-1 justify-between'>

              <div className='flex flex-row items-center gap-3 justify-between'>

                <Field
                  // onChange={(e) => handleSelectChange(e.target.value)}
                  as='select'
                  type="text"
                  id="ProductBrand"
                  name="ProductBrand"
                  placeholder="Enter product category"
                  className={`w-full p-2 border-2 border-gray-300 border-dashed rounded-lg focus:ring-0 focus:outline-none resize-none bg-transparent`}
                >
                  <option selected defaultValue='...'>Choose Brands</option>
                  {
                    Brands.length !== 0 ? Brands.map((b) => <option  value={b.id}>{b.nameAR}</option>) : <option value='...'>Create New Brand</option>
                  }
                </Field>

                <div className="w-[20%]">
                  <button
                    onClick={openBrandModal}
                    type="button"
                    className="w-full p-2 py-3 font-semibold text-sm bg-gray-100 rounded-lg flex flex-row items-center justify-center m-auto text-[#ff9800] hover:bg-[#544EAB] hover:text-white transition-all duration-100"
                  >
                    <CgAddR className="me-2" /> New Brand
                  </button>
                </div>

              </div>
              <div className='w-full'>

                <ErrorMessage
                  name="ProductBrand"
                  component="div"
                  className="error text-sm text-red-600"
                />
              </div>

            </div>
          </div>
          {brandModalOpen && (
            <ModalComponent
              inputs={BrandInput}
              subtitle="Brand"
              isOpen={brandModalOpen}
              setIsOpen={closeBrandModal}
              path="Brand/CreateBrand"
              initialValues={BrandsinitialValues}
            />
          )}
          {/* {modalIsOpen && <ModalComponent inputs={BrandInput} subtitle='Brand' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='Brand/CreateBrand' initialValues={BrandsinitialValues} />} */}
          {/* {modalIsOpen&&<CreateOptionCom type='Brand'/>} */}
        </>
      );



    default:
      return null;
  }
};

export default FormCreateProduct
