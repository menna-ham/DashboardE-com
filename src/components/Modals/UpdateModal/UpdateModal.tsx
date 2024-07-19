import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardAlt } from 'react-icons/md';
import Modal from 'react-modal';
import * as Yup from 'yup';
import useFetch from '../../../utils/useFetch';
import { successfulAlert } from '../SuccessfulModal/SuccessfulModal';


/*
 update area(id, governrateID, nameen , name ar) 
 update color: id, namear, nameen, value
 update comment: id, comment, rating
 update governrate: id, nameen, namear, tax
 update reviewrequest:id, review, rate
 update roleclaims request: roleID, claims
 update role request: id, name, description
 update size request: id, namear, nameen
 update n=unit request: id, namear, nameen
 update userClaimsRequest: id, claims
 update userrolerequest: userid, roleid
 update vendor request: id, name, phone, address
 update voucherRequest: id, name, value
 update brand : id , nameen, namear, image

*/


const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%'
  },

};


const UpdateModal = ({ isOpen, setIsOpen, subtitle, path, ID, inputs }) => {
  // let { data, loading, error, fetchData } = useFetch('put', path)
  let [Success, setSuccess] = useState(false)
  let [Item, setItem] = useState({})
  let loginToken = localStorage.getItem('loginToken')
  let [initialValues, setInitialValue] = useState({});

  const validationSchema = Yup.object().shape(
    inputs.reduce((schema, input) => {
      schema[input.name] = input.validation;
      return schema;
    }, {})
  );

  let getItem = async () => {
    let { data } = await axios.get(`https://ecomerce.runasp.net/api/${path}?ID=${ID}`, {
      headers: {
        Authorization: `Bearer ${loginToken}`
      }
    })
    setItem(data.result);

    initialValues = {
      ...data.result
    }
    setInitialValue(initialValues)
    console.log('initial', initialValues);


  }


  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  let handleSubmit = async(values) => {
    console.log(values);
    let formData:any = new FormData();
    
    formData.append('NameAR', values.NameAR);
    formData.append('NameEN', values.NameEN);
    formData.append('FormFile', values.FormFile);
    console.log(formData.getAll('NameAR'));
      
    // try {
    //   let res:any = await fetchData(formData)
    //   console.log(res);
    //   setSuccess(res?.isSuccess);
    //   if(res?.isSuccess)
    //     {
    //      successfulAlert('brand added')
    //      handleClose()
    //     }
              
    // } catch (error) {
    //   setSuccess(false);
    //   console.log(Success);
    // }
  }


  useEffect(() => {
    if (isOpen) {
      getItem();

    }
  }, []);
  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleClose}
        style={customStyle}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button className='float-end' onClick={handleClose}><AiOutlineClose />  </button>

        <h2 className='Font-bold text-xl text-blue-500 ' ref={(_subtitle) => (subtitle = _subtitle)}>Update {subtitle} {Item?.nameAR}</h2>

        <Formik

          enableReinitialize={false}
          initialValues={Item}
          validationSchema={validationSchema}
          onSubmit={() => console.log('submitting')}
        >

          {({ errors, touched, handleChange, handleBlur, isSubmitting, values, setFieldValue }) => (

            <Form onSubmit={() => handleSubmit(values)} className='grid grid-cols-2 gap-2 my-2 items-center'>
              {inputs.map((input, key) => (

                (() => {
                  switch (input.type) {
                    case 'text':
                      return (
                        <div key={input.name} className=''>
                          <label htmlFor={input.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent">{input.label}</label>
                          <Field name={input.name}>
                              {({ field }) => (
                                <input
                                  {...field}
                                  type="text"
                                  id={input.name}
                                  defaultValue={Item[input.name.charAt(0).toLowerCase() + input.name.slice(1)]} //values[input.name.charAt(0).toLowerCase() + input.name.slice(1)]
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                                />
                              )}
                            </Field>
                          {/* <Field
                            type={input.type}
                            id={input.name}
                            name={input.name}
                            value={Item[input.name.charAt(0).toLowerCase() + input.name.slice(1)]||''}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                          /> */}
                          <ErrorMessage name={input.name} component="div" className='text-sm text-red-500' />
                        </div>
                      );
                    case 'image':
                      return (
                        <div key={input.name} className=''>
                          <label htmlFor={input.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent">{input.label}</label>
                          <Field
                            type='file'
                            id={input.name}
                            name={input.name}
                            accept=".jpg, .jpeg, .png, .JPG, .JPEG, .PNG"
                            value={Item[input.name]}
                            onChange={(event) => {
                              setFieldValue(input.name, event.target.files[0]);
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                          />
                          <ErrorMessage name={input.name} component="div" className='text-sm text-red-500' />
                        </div>
                      );
                    case 'radio':

                      return (
                        <div key={input.name} className='flex flex-row gap-3 items-center  h-full mt-4'>
                          
                          {
                            input.options.map((option) => (
                              <div key={option.value} className='flex flex-row gap-1  justify-center my-auto'>
                              <Field
                                type="radio"
                                id={`${input.name}_${option.value}`}
                                name={input.name}
                                value={option.value}
                                checked={values[input.name] === option.value}
                                onChange={() => setFieldValue(input.name, option.value)}
                              />
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent" htmlFor={`${input.name}_${option.value}`}>{option.label}</label>
                            </div>

                            ))
                          }
                        </div>
                      )
                    default:
                      return null;
                  }
                })()

              ))
              }

              <div className='flex gap-2 mt-5 justify-end'>

                <button type='submit' disabled={isSubmitting || Object.entries(errors).length > 0 || isSubmitting || (Object.keys(initialValues).length === 0 && Object.keys(values).length === 0)} className='bg-blue-400 p-2 rounded-lg text-white font-bold'> {isSubmitting ? 'Updating' : 'Update'}</button>
                <button type='reset' onClick={handleClose} className='bg-red-400 p-2 rounded-lg text-white font-bold'> Cancel</button>
              </div>

            </Form>
          )
          }
        </Formik>



      </Modal>
    </div>

  )
}

export default UpdateModal