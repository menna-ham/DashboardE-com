import { ErrorMessage, Field, Formik } from 'formik';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form } from 'react-router-dom';
import * as Yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';
import useFetch from '../../../utils/useFetch';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { successfulAlert } from '../SuccessfulModal/SuccessfulModal';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { InputField } from 'utils/typesAndInterfaces.ts';



// interface ModalComponentProps {
//   inputs: InputField[];
//   subtitle: string;
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   initialValues: { [key: string]: any }; // Adjust type as needed
//   path: string;
// }
interface ModalComponentProps {
  inputs: InputField[];
  subtitle: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  path: string;
  initialValues: any; // Adjust type as necessary
}


const customStyles = {
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

const ModalComponent: React.FC<ModalComponentProps> = ({
  inputs,
  subtitle,
  isOpen,
  setIsOpen,
  initialValues,
  path,
}) => {
  const { data, loading, error, fetchData } = useFetch('post', path);
  const [success, setSuccess] = useState<boolean>(false);
  console.log('modal called');

  const validationSchema = Yup.object().shape(
    inputs.reduce((schema, input) => {
      schema[input.name] = input.validation;
      return schema;
    }, {} as any)
  );

  const MySwal = withReactContent(Swal);

  const afterOpenModal = () => {
    // This is used to set subtitle color when the modal opens
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const handleSubmit = async (values: any) => {
  //   console.log('submitting')
  //   console.log('submitting', values);
  //   const formData = new FormData();
  //   formData.append('nameAR', values.nameAR);
  //   formData.append('nameEN', values.nameEN);
  //   formData.append('formFile', values.formFile);
  //   console.log(formData);

  //   try {
  //     const res: any = await fetchData(formData);
  //     console.log(res);
  //     setSuccess(res?.isSuccess);
  //     if (data) {
  //       successfulAlert('brand added');
  //       closeModal();
  //     }
  //   } catch (error) {
  //     setSuccess(false);
  //     console.log(success);
  //   }
  // };

  const handleSubmit = ()=>{
    console.log('submitting test')
  }
  console.log('hello');

  return (
    <>
      <div className='p-2'>
        <Modal
          isOpen={isOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={`Create ${subtitle}`}
          ariaHideApp={false}
        >
          <button className='float-end' onClick={closeModal}>
            <AiOutlineClose />
          </button>

          <h2 className='Font-bold text-xl text-blue-500' >
            Create New {subtitle}
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} // Pass the actual submit function
            // onSubmit={()=>console.log('submitting')} // Pass the actual submit function
          >
            {({ errors, touched, isSubmitting, values, setFieldValue }) => (
              <Form className='grid grid-cols-2 gap-2 my-2 items-center'>
                {inputs.map((input) => {
                  switch (input.type) {
                    case 'text':
                      return (
                        <div key={input.name}>
                          <label htmlFor={input.name} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent'>
                            {input.label}
                          </label>
                          <Field
                            type={input.type}
                            id={input.name}
                            name={input.name}
                            onChange={(event:any) => setFieldValue(input.name, event.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500'
                          />
                          <ErrorMessage name={input.name} component='div' className='text-sm text-red-500' />
                        </div>
                      );
                    case 'image':
                      return (
                        <div key={input.name}>
                          <label htmlFor={input.name} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent'>
                            {input.label}
                          </label>
                          <Field
                            type='file'
                            id={input.name}
                            name={input.name}
                            value={undefined}
                            accept='.jpg, .jpeg, .png, .JPG, .JPEG, .PNG'
                            onChange={(event:any) => {
                              setFieldValue(input.name, event.currentTarget.files![0]);
                            }}
                            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500'
                          />
                          <ErrorMessage name={input.name} component='div' className='text-sm text-red-500' />
                        </div>
                      );
                    case 'radio':
                      return (
                        <div key={input.name} className='flex flex-row gap-3 items-center h-full mt-4'>
                          {input.options?.map((option) => (
                            <div key={option.value} className='flex flex-row gap-1 justify-center my-auto'>
                              <Field
                                type='radio'
                                id={`${input.name}_${option.value}`}
                                name={input.name}
                                checked={values[input.name] === option.value}
                                onChange={() => setFieldValue(input.name, option.value)}
                              />
                              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent' htmlFor={`${input.name}_${option.value}`}>
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      );
                    default:
                      return null;
                  }
                })}

                <div className='flex gap-2 mt-5 justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting || Object.entries(errors).length > 0 || (Object.keys(initialValues).length === 0 && Object.keys(values).length === 0)}
                    className='bg-blue-400 p-2 rounded-lg text-white font-bold'
                  >
                    {loading ? <AiOutlineLoading3Quarters className='spinner' /> : 'create'}
                  </button>

                  <button type='reset' onClick={closeModal} className='bg-red-400 p-2 rounded-lg text-white font-bold'>
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal>
      </div>

      {success && <div>success</div>}
      {error && <div>error</div>}
    </>
  );
};

export default ModalComponent;
