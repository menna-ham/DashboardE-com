import React from 'react'
// import StepperCom from './StepperCom';
import StepperCom from './StepperCom.tsx';
import StepperTest from './StepperTest.tsx';

const CreateProduct = () => {
  return (
    <div className='p-2'>
      <p className='text-2xl font-semibold pb-3'>New Product</p>
      <StepperTest/>
      {/* <StepperCom/> */}
    </div>
  );
};

export default CreateProduct;
