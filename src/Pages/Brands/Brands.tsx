import React, { useEffect, useState } from 'react'
import useFetch from '../../utils/useFetch.tsx'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import DataTable from '../../components/DataTable/DataTable.jsx';
import { MdDeleteForever, MdOutlineEditNote, MdViewInAr } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import Modal from 'react-modal'
import ModalComponent from '../../components/Modals/ModalComponent/ModalComponent.tsx';
import noBrand from '../../assets/nologoImg.png'
import * as Yup from 'yup';
import { BrandInput, BrandsinitialValues } from '../../utils/inputsFeilds.js';
import UpdateModal from '../../components/Modals/UpdateModal/UpdateModal.tsx';



const Brands = () => {
  let { data, loading, error, fetchData } = useFetch('get', 'Brand/GetAllBrand')
  let [modalIsOpen, setIsOpen] = useState(false);
  let [updateModalIsOpen, setUpdateIsOpen] = useState(false);
  let [DeleteModalIsOpen, setDeleteIsOpen] = useState(false);
  // let {result}:any = data
 let handleEdit = (row) => {
  console.log('edit');
  setUpdateIsOpen(true)
  
  };
  let handleDelete = (row) => {
    console.log('delete');
    setUpdateIsOpen(true)
    
    };

  let columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 150 , type:'string'},
    {
      field: 'photoPath', headerName: 'Logo', width: 150,
      renderCell: (params) => (
        <img className='rounded-full  w-10 h-10' src={ noBrand} /> //`https://ecomerce.runasp.net/images/brands/08fd5c0d-b08d-402b-8362-90a4b4059ef6.png` ||
      )
    },
    { field: 'nameAR', headerName: 'Name Arabic', width: 150 , type:'string'},
    {field: 'isActive', headerName:'Is Active', type:'boolean', width:150},
    { field: 'nameEN', headerName: 'Name English', width: 150 , type:'string'},
    {
      field: 'Actions',
      width: 150
      , headerName: 'Actions',
      renderCell: (_params: any, _text: any, row: any, params) => {
        return (
          <div className='flex flex-row gap-2 items-center mt-2 text-black'>
            <div className='bg-green-500 p-2 rounded-md cursor-pointer text-white'><MdViewInAr /></div>
            <button className='bg-yellow-500 p-2 rounded-md cursor-pointer text-white' onClick={() => handleEdit(row)
            }><MdOutlineEditNote /> </button>
            <div className='bg-red-500 p-2 rounded-md cursor-pointer text-white' onClick={() => handleDelete(row)}><MdDeleteForever /> </div>
          </div>
        )
      }
    },
  ];

  
  let rows: GridRowsProp = [];


  function openModal() {
    setIsOpen(true);
  }

  if (data!=null){
    let {result}:any = data
    const filteredData = result?.items.map(item => ({
      ID:item.id,
      nameAR: item.nameAR,
      nameEN: item.nameEN,
      photoPath: item.photoPath,
      isActive: item.isActive
    }));
    rows=[...filteredData]
    // console.log(rows);
  }

  useEffect(() => {
      fetchData();
  }, [])

  useEffect(() => {
    fetchData();
  }, [modalIsOpen])

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {data && 

        <div className='p-2'>
          <div>
            <p className=' uppercase text-2xl font-bold '>Brands managment</p>
            <div className='flex justify-end'>
              filters
            </div>
            <div className='flex flex-row justify-between my-3'>

              <div className='flex flex-row items-center'>
                <BiSearch className='text-gray-500' />
                <input type="search" placeholder='Search for' className='h-10 w-96 pr-8 pl-5 rounded z-0 focus:none focus:outline-none' />
              </div>

              <div> <button onClick={openModal} className='bg-blue-400 text-white p-2 rounded-lg'>Add New Brand</button></div>

            </div>
          </div>
          <div style={{ height: 300, width: '100%' }}>
            <DataTable rows={rows} columns={columns} />
          </div>

          {modalIsOpen && <ModalComponent inputs={BrandInput} subtitle='Brand' isOpen={modalIsOpen} setIsOpen={setIsOpen} path='Brand/CreateBrand' initialValues={BrandsinitialValues} />}

          {updateModalIsOpen&& <UpdateModal isOpen={updateModalIsOpen} setIsOpen={setUpdateIsOpen} subtitle={'Brand'}/>}


        </div>

      }
    </>
  )

  // return (
  //   <div>
  //     <div className='my-2 '>
  //       <h2 className='uppercase text-2xl font-bold'>Brands Managment</h2>
  //     </div>

  //     <div className='my-3'>

  //       <table className='table table-bordered w-full '>

  //         <thead>
  //           <tr>
  //             <th className=''>#</th>
  //             <th className=''>Brand</th>
  //             <th className=''>Date Created</th>
  //             <th className=''>Actions</th>
  //           </tr>
  //         </thead>

  //         <tbody>
  //           <tr>
  //             <td className=''>The Sliding </td>
  //             <td className=''>Malcolm Lockyer</td>
  //             <td className=''>1961</td>
  //             <td className=''>1961</td>

  //           </tr>
  //           <tr>
  //             <td>The Sliding </td>
  //             <td>Malcolm Lockyer</td>
  //             <td>1961</td>
  //             <td>1961</td>

  //           </tr>


  //         </tbody>


  //       </table>

  //     </div>

  //   </div>
  // )
}

export default Brands
