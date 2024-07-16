import { ErrorMessage, Field, Formik } from 'formik';
import React, { useState } from 'react'
import Modal from 'react-modal'
import { Form } from 'react-router-dom';
import * as Yup from 'yup';
import { AiOutlineClose } from "react-icons/ai";
import useFetch from '../../../utils/useFetch.tsx';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { successfulAlert } from '../SuccessfulModal/SuccessfulModal.js';
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
  let [Success, setSuccess] = useState(false)
  const validationSchema = Yup.object().shape(
    inputs.reduce((schema, input) => {
      schema[input.name] = input.validation;
      return schema;
    }, {})
  );
  const MySwal = withReactContent(Swal)

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
        
      try {
        let res:any = await fetchData(formData)
        console.log(res);
        setSuccess(res?.isSuccess);
        if(res?.isSuccess)
          {
           successfulAlert('brand added')
            closeModal()
          }
                
      } catch (error) {
        setSuccess(false);
        console.log(Success);
      }
    };

    
   console.log(data);
    

  return (
    <>
  
    <div className='p-2 '>
      <Modal
      
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={`Create ${subtitle}`}
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

          <div className='flex gap-2 mt-5 justify-end'>

          <button type='submit' disabled={isSubmitting ||Object.entries(errors).length > 0 || isSubmitting ||(Object.keys(initialValues).length === 0 && Object.keys(values).length === 0 )} className='bg-blue-400 p-2 rounded-lg text-white font-bold'> {isSubmitting?'Adding': 'create'}</button>

          <button type='reset' onClick={closeModal} className='bg-red-400 p-2 rounded-lg text-white font-bold'> Cancel</button>
          </div>
            
        </Form>
        )
      }
      </Formik>

      {/* <div><button onClick={()=>successfulAlert('test')}>alert</button></div> */}

      </Modal>
    </div>

    {Success&&<div>success</div>}
    {error&&<div>error</div>}

    </>
  )
}

export default ModalComponent
