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
  let [IDUpdate, setIDUpdate] = useState('');
  let [Items, setItems] = useState({})
  let [updateModalIsOpen, setUpdateIsOpen] = useState(false);
  let [DeleteModalIsOpen, setDeleteIsOpen] = useState(false);

  // let {result}:any = data
 let handleEdit = (row) => {
  console.log('edit', row.ID);
  setUpdateIsOpen(true)
  setIDUpdate(row.ID)
  
  };
  let handleDelete = (row) => {
    console.log('delete');
    setUpdateIsOpen(true)
    
  };

    
  function openModal() {
    setIsOpen(true);
  }

  let columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 150 , type:'string'},
    {
      field: 'photoPath', headerName: 'Logo', width: 150,
      renderCell: (params) => (
        <img className='rounded-full  w-10 h-10' src={ noBrand} /> //`https://ecomerce.runasp.net/images/brands/08fd5c0d-b08d-402b-8362-90a4b4059ef6.png` ||
      )
    },
    { field: 'nameAR', headerName: 'Name Arabic', width: 150 , type:'string'},
    { field: 'nameEN', headerName: 'Name English', width: 150 , type:'string'},
    {field: 'isActive', headerName:'Is Active', type:'boolean', width:150},
    {
      field: 'Actions',
      width: 150
      , headerName: 'Actions',
      renderCell: (params ) => {
        return (
          <div className='flex flex-row gap-2 items-center mt-2 text-black'>
            <div className=' p-2 rounded-md cursor-pointer text-white'><MdViewInAr  className='text-gray-700' size={'20px'}/></div>
            <button className=' p-2 rounded-md cursor-pointer text-white' onClick={() => handleEdit(params.row)
            }><MdOutlineEditNote  className='text-gray-700' size={'20px'}/> </button>
            <div className='p-2 rounded-md cursor-pointer text-white' onClick={() => handleDelete(params.row)}><MdDeleteForever className='text-gray-700' size={'20px'}/> </div>
          </div>
        )
      }
    },
  ];
  
  let rows: GridRowsProp = [];

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
    // console.log(result)
    // setItems(result.items)
    // console.log(rows);
  }

  useEffect(() => {
    fetchData()
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

          {updateModalIsOpen&& <UpdateModal isOpen={updateModalIsOpen} setIsOpen={setUpdateIsOpen} subtitle={'Brand'} path='Brand/FindBrand' ID={IDUpdate} inputs={BrandInput}/>}


        </div>

      }
    </>
  )

}

export default Brands
