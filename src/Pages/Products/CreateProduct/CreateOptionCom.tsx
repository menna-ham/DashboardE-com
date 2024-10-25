import React, { useState } from 'react'
import { BrandInput, BrandsinitialValues, CategoryInitialValues, CategoryInput, SubCategoryInitialValues, SubCategoryInput } from '../../../utils/inputsFeilds.ts';
import ModalComponent from '../../../components/Modals/ModalComponent/ModalComponent.tsx';

interface CreateOptionComProps{
type:string;
}

const CreateOptionCom: React.FC<CreateOptionComProps> = ({type}) => {
    let [modalIsOpen, setIsOpen] = useState(false);
    console.log('create option', type)

    switch (type) {
        case 'category':
            return(
                <ModalComponent inputs={CategoryInput} subtitle='Category' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='Catgeory/CreateCategory' initialValues={CategoryInitialValues} />
            )
            break;
        
        case'SubCategory':
        return(
            <ModalComponent inputs={SubCategoryInput} subtitle='Sub-Category' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='SubCatgeory/CreateSubCategory' initialValues={SubCategoryInitialValues} />
        )

        case'brand':
        return(
            <ModalComponent inputs={BrandInput} subtitle='Sub-Category' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='SubCatgeory/CreateSubCategory' initialValues={BrandsinitialValues} />
        )
        default:
            break;
    }
//   return (
//     <div>
//         {
//             type==='category'?<ModalComponent inputs={CategoryInput} subtitle='Category' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='Catgeory/CreateCategory' initialValues={CategoryInitialValues} />
//             :<ModalComponent inputs={SubCategoryInput} subtitle='Sub-Category' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='SubCatgeory/CreateSubCategory' initialValues={SubCategoryInitialValues} />
//         }

//     </div>
//   )
}

export default CreateOptionCom
