import * as Yup from 'yup';

export let BrandInput=[
    {name:'NameAR', label:'Name Arabic', type:'text',validation: Yup.string().required('Name Arabic is required'),},
    {name:'NameEN', label:'Name English', type:'text',validation: Yup.string().required('Name English is required')},
    {name:'FormFile', label:'Logo', type:'image',validation: Yup.string()},
  ]

export let BrandsinitialValues={
    NameAR:'',
    NameEN:'',
    FormFile:'',
  }