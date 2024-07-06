import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'

const DataTable = ({columns, rows}) => {
  return (
    <div>
      <DataGrid 
      className='bg-white text-black'
      initialState={{
        pagination:{
            paginationModel:{
                pageSize:10
            }
        }
      }}
      slots={{ toolbar: GridToolbar }}
      pageSizeOptions={[10]}
    //   checkboxSelection
      autoHeight  
      rows={rows} 
      columns={columns}
      />
    </div>
  )
}

export default DataTable
