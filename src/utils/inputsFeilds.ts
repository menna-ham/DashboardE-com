import * as Yup from 'yup';
import { InputField } from './typesAndInterfaces';
// Define the types for the input fields

export const BrandInput: InputField[] = [
  {
    name: 'nameAR',
    label: 'Name Arabic',
    type: 'text',
    validation: Yup.string()
      .min(3, 'Must be more than 3 characters')
      .max(20, 'Must be less than 20 characters')
      .required('Arabic text is required')
      .matches(/^[\u0600-\u06FF\s]+$/, 'Please enter valid Arabic text'),
  },
  {
    name: 'nameEN',
    label: 'Name English',
    type: 'text',
    validation: Yup.string()
      .min(3, 'Must be more than 3 characters')
      .max(20, 'Must be less than 20 characters')
      .required('English text is required')
      .matches(/^[A-Za-z\s]+$/, 'Please enter valid English text'),
  },
  {
    name: 'formFile',
    label: 'Logo',
    type: 'image',
    validation: Yup.mixed()
      .required('Image is required')
      .test('fileType', 'Only image files are allowed', (value) => {
        // Check if value is of type File
        if (value instanceof File) {
          return ['image/jpeg', 'image/png', 'image/jpg', 'image/JPEG', 'image/PNG', 'image/JPG'].includes(value.type);
        }
        return false;
      }),
  },
];

export const BrandsinitialValues = {
  nameAR: '',
  nameEN: '',
  formFile: undefined as File | undefined,
};

export const CategoryInput: InputField[] = [
  {
    name: 'nameAR',
    label: 'Name Arabic',
    type: 'text',
    validation: Yup.string()
      .min(3, 'Must be more than 3 characters')
      .max(20, 'Must be less than 20 characters')
      .required('Arabic text is required')
      .matches(/^[\u0600-\u06FF\s]+$/, 'Please enter valid Arabic text'),
  },
  {
    name: 'nameEN',
    label: 'Name English',
    type: 'text',
    validation: Yup.string()
      .min(3, 'Must be more than 3 characters')
      .max(20, 'Must be less than 20 characters')
      .required('English text is required')
      .matches(/^[A-Za-z\s]+$/, 'Please enter valid English text'),
  },
  {
    name: 'formFile',
    label: 'Logo',
    type: 'image',
    validation: Yup.mixed()
      .required('Image is required')
      .test('fileType', 'Only image files are allowed', (value) => {
        // Check if value is of type File
        if (value instanceof File) {
          return ['image/jpeg', 'image/png', 'image/jpg', 'image/JPEG', 'image/PNG', 'image/JPG'].includes(value.type);
        }
        return false;
      }),
  },
];

export const CategoryInitialValues = {
  NameAR: '',
  NameEN: '',
  FormFile: undefined as File | undefined,
};

export const SubCategoryInput: InputField[]  = [
  {
    name: 'nameAR',
    label: 'Name Arabic',
    type: 'text',
    validation: Yup.string()
      .min(3, 'Must be more than 3 characters')
      .max(20, 'Must be less than 20 characters')
      .required('Arabic text is required')
      .matches(/^[\u0600-\u06FF\s]+$/, 'Please enter valid Arabic text'),
  },
  {
    name: 'nameEN',
    label: 'Name English',
    type: 'text',
    validation: Yup.string()
      .min(3, 'Must be more than 3 characters')
      .max(20, 'Must be less than 20 characters')
      .required('English text is required')
      .matches(/^[A-Za-z\s]+$/, 'Please enter valid English text'),
  },
  {
    name: 'formFile',
    label: 'Logo',
    type: 'image',
    validation: Yup.mixed()
      .required('Image is required')
      .test('fileType', 'Only image files are allowed', (value) => {
        // Check if value is of type File
        if (value instanceof File) {
          return ['image/jpeg', 'image/png', 'image/jpg', 'image/JPEG', 'image/PNG', 'image/JPG'].includes(value.type);
        }
        return false;
      }),
  },
];

export const SubCategoryInitialValues = {
  NameAR: '',
  NameEN: '',
  FormFile: undefined as File | undefined,
};
