import * as Yup from 'yup';

export let BrandInput=[
    {name:'NameAR', label:'Name Arabic', type:'text',validation: Yup.string().min(3,'Must be more than characters').max(20, 'Must be less than 20 characters').required('Arabic text is required')
      .matches(/^[\u0600-\u06FF\s]+$/, 'Please enter valid Arabic text'),},
    {name:'NameEN', label:'Name English', type:'text',validation: Yup.string().min(3,'Must be more than characters').max(20, 'Must be less than 20 characters').required('English text is required') .matches(/^[A-Za-z\s]+$/, 'Please enter valid English text')},
    {name:'FormFile', label:'Logo', type:'image',validation: Yup.mixed()
      .required('Image is required')
      .test('fileType', 'Only image files are allowed', (value) => {
        if (value) {
          return value && ['image/jpeg', 'image/png','image/jpg','image/JPEG','image/PNG','image/JPG'].includes(value.type);
        }
        return true;
      }),
    },
  ]

export let BrandsinitialValues={
    NameAR:'',
    NameEN:'',
    FormFile:undefined,
  } 