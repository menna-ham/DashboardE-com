import React from 'react'
// import StepperCom from './StepperCom';
import StepperCom from './StepperCom.tsx';
import StepperTest from './StepperTest.tsx';

const CreateProduct = () => {
  return (
    <div className='p-3 w-full bg-white  rounded-lg'>
      <p className='text-2xl font-semibold pb-3'>New Product</p>
      <div className='w-full '>
        <StepperTest/>
      </div>
      {/* <StepperCom/> */}
    </div>
  );
};

export default CreateProduct;
