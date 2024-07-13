import { ErrorMessage, Field, Formik } from 'formik';
import React, { useState } from 'react'
import Modal from 'react-modal'
import { Form } from 'react-router-dom';
import * as Yup from 'yup';
import { AiOutlineClose } from "react-icons/ai";
import useFetch from '../../utils/useFetch.tsx';
// import useFetch from '../../utils/useFetch.tsx';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'60%'
    },

  };


const ModalComponent = ({inputs,subtitle,isOpen,setIsOpen,initialValues, path}) => {
  let { data, loading, error, fetchData } = useFetch('post', path)

const validationSchema = Yup.object().shape(
  inputs.reduce((schema, input) => {
    schema[input.name] = input.validation;
    return schema;
  }, {})
);

    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleSubmit = async(values) => {
      let formData:any = new FormData()
      formData.append('NameAR', values.NameAR);
      formData.append('NameEN', values.NameEN);
      formData.append('FormFile', values.FormFile);
      console.log(formData.getAll('NameAR'));
        
      await fetchData(formData)
      console.log(data, error, loading);
        
      
    };

    
    

  return (
    <>
  
    <div className='p-2 '>
      <Modal
      
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button className='float-end' onClick={closeModal}><AiOutlineClose />  </button>

        <h2 className='Font-bold text-xl text-blue-500 ' ref={(_subtitle) => (subtitle = _subtitle)}>Create New {subtitle}</h2>
        
        
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={()=>console.log('submitting')}
      >
        {({ errors, touched,isSubmitting ,values, setFieldValue})=>(

        <Form onSubmit={()=>handleSubmit(values)} className='grid grid-cols-2 gap-2 my-2 items-center'>
          {inputs.map((input) => (
            
              input.type==='image'? 
              <div key={input.name} className=''>
              <label htmlFor={input.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent">{input.label}</label>
              <Field
                type='file'
                id={input.name}
                name={input.name}
                accept=".jpg, .jpeg, .png, .JPG, .JPEG, .PNG"
                value={undefined}
                onChange={(event) => {
                  setFieldValue(input.name, event.target.files[0]);
                  console.log(event);
                  
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              />
              <ErrorMessage name={input.name} component="div"  className='text-sm text-red-500'/>
            </div>
                :<div key={input.name} className=''>
                <label htmlFor={input.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent">{input.label}</label>
                <Field
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                />
                <ErrorMessage name={input.name} component="div"  className='text-sm text-red-500'/>
              </div>
          
          )) 
          }
            

          
          {/* <div className='flex flex-col gap-2'>
          <p></p> */}

          <div className='flex gap-2 mt-5 justify-end'>

          <button type='submit' disabled={Object.entries(errors).length > 0 || isSubmitting ||(Object.keys(initialValues).length === 0 && Object.keys(values).length === 0 )} className='bg-blue-400 p-2 rounded-lg text-white font-bold'> Create</button>

          <button type='reset' onClick={closeModal} className='bg-red-400 p-2 rounded-lg text-white font-bold'> Cancel</button>
          </div>
          {/* </div> */}
            
        </Form>
        )
      }
      </Formik>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
                <div>
                    <h2>API Response</h2>
                      {data}
                </div>
      )} */}


      </Modal>
    </div>

    </>
  )
}

export default ModalComponent
