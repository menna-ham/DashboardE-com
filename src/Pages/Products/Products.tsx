import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import useFetch from '../../utils/useFetch.tsx'
import { BiSearch } from 'react-icons/bi';
import { Avatar } from '@mui/material';
import DataTable from '../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';

const Products = () => {
  let { data, loading, error, fetchData } = useFetch('get', 'Product/GetAllProduct')
  let [modalIsOpen, setIsOpen] = useState(false);


  let columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 150, type: 'string' },
    {
      field: 'photoPath', headerName: 'Logo', width: 150, align: 'center',
      renderCell: (params) => (
        <Avatar alt="Remy Sharp" src={''} />
      )
    },
    { field: 'nameAR', headerName: 'Name Arabic', width: 150, type: 'string' },
    { field: 'nameEN', headerName: 'Name English', width: 150, type: 'string' },
  ]
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

  return (
    <div className='p-2'>
      {loading && <div>Loading...</div>}
      {error ?<div>Error: {error}</div>:
      
      <>
      <div>
        <p className=' uppercase text-2xl font-bold '>Products managment</p>
        <div className='flex justify-end'>
          filters
        </div>
        <div className='flex flex-row justify-between my-3'>

          <div className='flex flex-row items-center'>
            <BiSearch className='text-gray-500' />
            <input type="search" placeholder='Search for' className='h-10 w-96 pr-8 pl-5 rounded z-0 focus:none focus:outline-none' />
          </div>

          <div> <Link to={'/products/createProduct'} className='bg-blue-400 text-white p-2 rounded-lg'>Add New Product</Link></div>

        </div>
      </div>

      <div style={{ height: 300, width: '100%' }}>
        <DataTable rows={rows} columns={columns} />
      </div>
      </>
      }
    </div>
  )
}

export default Products
