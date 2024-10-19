import React, { useEffect, useState } from 'react'
// import StepperCom from './StepperCom';
import StepperTest from './StepperTest.tsx';
import useFetch from '../../../utils/useFetch.tsx';
import * as Yup from "yup";
import { CgShoppingCart } from "react-icons/cg";
import { TbLibraryPhoto, TbCategory2 } from "react-icons/tb";
import FormCreateProduct from './FormCreateProduct.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../../Redux/Slices/brandSlice.jsx';
import { fetchSubcategories } from '../../../Redux/Slices/subcategorySlice.jsx';

const steps = [
  { label: "Add Product Details", icon: CgShoppingCart },
  { label: "Product Gallery", icon: TbLibraryPhoto },
  { label: "Product Categories", icon: TbCategory2 },
];

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
  discount: Yup.number().typeError("Discount must be a number"),
});

const initialValues = {
  productTitle: "",
  description: "",
  productImage: "",
  productGallery: [],
  productCategory: "",
  productSubCategory: "",
  productBrand: "",
  sellingPrice: "",
  discount: "",
};

const CreateProduct = () => {
  const dispatch = useDispatch();

  const { data: catData, loading, error, fetchData } = useFetch('get', 'Category/GetAllCategory')
  const { data: subData, loading: subLoad, error: SubErr, fetchData: fetSubCat } = useFetch('get', 'SubCategory/GetAllSubCategory')
  const { data: BrandData, loading: BrandLoad, error: BrandErr, fetchData: fetchBrand } = useFetch('get', 'Brand/GetAllBrand')
  let [categories, setCategories] = useState([]);
  let [subCategories, setSubCategories] = useState([]);
  let [Brands, setBrands] = useState([]);

  const { brands, loading: brandsLoading, error: brandsError } = useSelector((state) => state.brands);
  const { subcategories, loading: subcategoriesLoading, error: subcategoriesError } = useSelector((state) => state.subcategories);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchSubcategories());
  }, [dispatch]);



  let settingVals = () => {
    // console.log('cat', categories);
    if (catData?.result) {
      setCategories(catData?.result.items);
      // console.log('cat', categories);
    }
    if (subData?.result) {
      setSubCategories(subData?.result.items);
      // console.log('Subcat', subCategories);
    }
    if (BrandData?.result) {
      setBrands(BrandData?.result.items);
      // console.log('brands', Brands);
    }
  };

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  const FormCreateProduct = (currentStep, values) => (
    <FormCreateProduct currentStep={currentStep} values={values} Brands={Brands} categories={categories} subCategories={subCategories} />
    // <FormCreateProduct currentStep={currentStep} values={values} />
  );


  useEffect(() => {
    fetchData()
    fetSubCat()
    fetchBrand()
    settingVals()
    console.log('called from create page')
    // console.log('cat', categories);  
  }, [])

  return (
    <div className='p-3 w-full bg-white  rounded-lg'>
      <p className='text-2xl font-semibold pb-3'>New Product</p>
      <div className='w-full '>
        {/* <StepperTest/> */}
        {/* <StepperTest
          steps={steps}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          // fetchDataHooks={[{ fetchData }, { fetchData: fetSubCat }, { fetchData: fetchBrand }]}
          FormCreateProduct={FormCreateProduct} /> */}
      </div>
      {/* <StepperCom/> */}
    </div>
  );
};

export default CreateProduct;
