import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { successfulAlert } from '../SuccessfulModal/SuccessfulModal';

// Define types for props
interface InputField {
  name: string;
  label: string;
  type: string;
  validation: any; // You can define a more specific type based on your validation schema
}

interface UpdateModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  subtitle: string;
  path: string;
  ID: string | number;
  inputs: InputField[];
}

// Custom styles for the modal
const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
  },
};

// UpdateModal component
const UpdateModal: React.FC<UpdateModalProps> = ({ isOpen, setIsOpen, subtitle, path, ID, inputs }) => {
  const [Success, setSuccess] = useState<boolean>(false);
  const [Item, setItem] = useState<Record<string, any>>({});
  const loginToken = localStorage.getItem('loginToken');
  const [initialValues, setInitialValue] = useState<Record<string, any>>({});

  // Create validation schema based on input validations
  const validationSchema = Yup.object().shape(
    inputs.reduce((schema, input) => {
      schema[input.name] = input.validation;
      return schema;
    }, {} as Record<string, any>)
  );

  // Fetch item details to populate form
  const getItem = async () => {
    try {
      const { data } = await axios.get(`https://ecomerce.runasp.net/api/${path}?ID=${ID}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
      const item = { ...data.result };
      setItem(item);
      setInitialValue(item);
      console.log('Fetched item:', item);
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  function afterOpenModal() {
    // Optionally manipulate subtitle here
  }

  // Handle form submission
  const handleSubmit = async (values: Record<string, any>) => {
    console.log('Form values:', values);
    let formData = new FormData();
    
    formData.append('NameAR', values.NameAR);
    formData.append('NameEN', values.NameEN);
    formData.append('FormFile', values.FormFile);

    try {
      // Replace this with your update request
      // const res = await axios.put(`your-api-endpoint`, formData, { headers: { Authorization: `Bearer ${loginToken}` } });
      // setSuccess(res?.isSuccess);
      // if (res?.isSuccess) {
      //   successfulAlert('Brand updated successfully');
      //   handleClose();
      // }
    } catch (error) {
      console.error('Error updating item:', error);
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      getItem();
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleClose}
        style={customStyle}
        contentLabel="Update Modal"
        ariaHideApp={false}
      >
        <button className='float-end' onClick={handleClose}>
          <AiOutlineClose />
        </button>

        <h2 className='font-bold text-xl text-blue-500'>
          Update {subtitle} {Item?.nameAR}
        </h2>

        <Formik
          enableReinitialize={true} // Use true to ensure initial values update when Item changes
          initialValues={Item}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, isSubmitting, values, setFieldValue }) => (
            <Form className='grid grid-cols-2 gap-2 my-2 items-center'>
              {inputs.map((input) => {
                switch (input.type) {
                  case 'text':
                    return (
                      <div key={input.name}>
                        <label htmlFor={input.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {input.label}
                        </label>
                        <Field
                          type={input.type}
                          id={input.name}
                          name={input.name}
                          defaultValue={Item[input.name]}
                          onChange={(event:any) => setFieldValue(input.name, event.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        />
                        <ErrorMessage name={input.name} component="div" className='text-sm text-red-500' />
                      </div>
                    );
                  case 'image':
                    return (
                      <div key={input.name}>
                        <label htmlFor={input.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {input.label}
                        </label>
                        <Field
                          type='file'
                          id={input.name}
                          name={input.name}
                          accept=".jpg, .jpeg, .png"
                          onChange={(event:any) => setFieldValue(input.name, event.target.files[0])}
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        />
                        <ErrorMessage name={input.name} component="div" className='text-sm text-red-500' />
                      </div>
                    );
                  default:
                    return null;
                }
              })}

              <div className='flex gap-2 mt-5 justify-end'>
                <button
                  type='submit'
                  disabled={isSubmitting || Object.entries(errors).length > 0}
                  className='bg-blue-400 p-2 rounded-lg text-white font-bold'
                >
                  {isSubmitting ? 'Updating' : 'Update'}
                </button>
                <button type='reset' onClick={handleClose} className='bg-red-400 p-2 rounded-lg text-white font-bold'>
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default UpdateModal;
