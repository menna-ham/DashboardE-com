import React, { useEffect, useState } from 'react'
import useFetch from '../../utils/useFetch.tsx'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import DataTable from '../../components/DataTable/DataTable.jsx';
import { MdDeleteForever, MdOutlineEditNote, MdViewInAr } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import ModalComponent from '../../components/Modals/ModalComponent/ModalComponent.tsx';
import noBrand from '../../assets/black.png';
import { BrandInput, BrandsinitialValues } from '../../utils/inputsFeilds.js';
import UpdateModal from '../../components/Modals/UpdateModal/UpdateModal.tsx';
import Switch from "react-switch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Avatar } from '@mui/material';
import Swal from 'sweetalert2';



const Brands = () => {
  let { data, loading, error, fetchData } = useFetch('get', 'Brand/GetAllBrand')
  let { data:activeRes, loading:activeLoad, error:activeError, fetchData:activeFun } = useFetch('put', 'Brand/ToggleActiveBrand')
  let { data:deleteRes, loading:deleteLoad, error:deleteError, fetchData:deleteFun } = useFetch('delete', 'Brand/DeleteBrand')
  let [modalIsOpen, setIsOpen] = useState(false);
  let [IDUpdate, setIDUpdate] = useState('');
  let [Items, setItems] = useState({})
  let [updateModalIsOpen, setUpdateIsOpen] = useState(false);
  let [DeleteModalIsOpen, setDeleteIsOpen] = useState(false);
  let [activeLoading, setActiveLoading] = useState({});
  let [delID, setdelID] = useState({ID:''});

  let handleEdit = (row) => {
    console.log('edit', row.ID);
    setUpdateIsOpen(true)
    setIDUpdate(row.ID)

  };



  let handleDelete = async (row:any) => {
    console.log(row.ID)
    let formatData:any = new FormData()
    formatData.append("ID",row.ID)
    Swal.fire({
      title: "Are you sure you want to delete "+ row.nameEN+"?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",

      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            await deleteFun(row.ID);
            console.log('insideTry', deleteRes)
            if (deleteRes?.isSuccess) {
              console.log('yes deleted', deleteRes);
             Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        } catch (deleteRes) {
            console.error(' Test Error deleting row:', deleteRes);
            Swal.fire({
              title: 'Error!',
              text: 'There was an error deleting your file.',
              icon: 'error',
            });
          } 
        }
      })
   }
  


  function openModal() {
    setIsOpen(true);
  }

  let handleActive = async(ID:any) => {
    let formData:any = new FormData()
    formData.append('ID', ID);
    setActiveLoading(prev => ({ ...prev, [ID]: true }));

    try{
      // setActiveLoading(true);
      await activeFun(formData);
      console.log(activeRes)
      setActiveLoading(activeLoad)
    }catch{
      console.log(activeError)
      setActiveLoading(prev => ({ ...prev, [ID]: false }));
    }
  }

  let columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 150, type: 'string' },
    {
      field: 'photoPath', headerName: 'Logo', width: 150,align:'center',
      renderCell: (params) => (
        <Avatar alt="Remy Sharp" src={noBrand}  /> 
      )
    },
    { field: 'nameAR', headerName: 'Name Arabic', width: 150, type: 'string' },
    { field: 'nameEN', headerName: 'Name English', width: 150, type: 'string' },
    {
      field: 'isActive', headerName: 'Is Active', type: 'boolean', width: 150,
      renderCell: (params) => {
        return (<>
        {
           activeLoading[params.row.ID]?<AiOutlineLoading3Quarters className="spinner"/>
            :<Switch onChange={()=>handleActive(params.row.ID)} checked={params.row.isActive} height={15} width={40} 
            offColor='#475569' onColor='#7367f0' />
        }
        </>
        )
      },
    },
    {
      field: 'Actions',
      width: 150,
      type:'actions'
      , headerName: 'Actions',
      renderCell: (params) => {
        return (
          <div className='flex flex-row gap-2 items-center mt-2 text-black'>
            <div className=' p-2 rounded-md cursor-pointer text-white'><MdViewInAr className='text-gray-700' size={'20px'} /></div>
            <button className=' p-2 rounded-md cursor-pointer text-white' onClick={() => handleEdit(params.row)
            }><MdOutlineEditNote className='text-gray-700' size={'20px'} /> </button>
            <div className='p-2 rounded-md cursor-pointer text-white' onClick={() => handleDelete(params.row)}><MdDeleteForever className='text-gray-700' size={'20px'} /> </div>
          </div>
        )
      }
    },
  ];

  let rows: GridRowsProp = [];

  if (data != null) {
    let { result }: any = data
    const filteredData = result?.items.map(item => ({
      ID: item.id,
      nameAR: item.nameAR,
      nameEN: item.nameEN,
      photoPath: item.photoPath,
      isActive: item.isActive
    }));
    rows = [...filteredData]
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData();
  }, [modalIsOpen, activeRes, deleteRes])

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

          {updateModalIsOpen && <UpdateModal isOpen={updateModalIsOpen} setIsOpen={setUpdateIsOpen} subtitle={'Brand'} path='Brand/FindBrand' ID={IDUpdate} inputs={BrandInput} />}


        </div>

      }
    </>
  )

}

export default Brands
