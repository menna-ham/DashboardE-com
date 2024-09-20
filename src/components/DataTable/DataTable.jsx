import { Box, styled } from '@mui/material';
import { DataGrid} from '@mui/x-data-grid'
import React from 'react'
import {CustomToolbar} from './CustomToolbar'
import {CustomPagination} from './CustomPagination'
import {CustomNoRowsOverlay} from './CustomNoRowsOverlay'



const DataTable = ({ columns, rows }) => {
  console.log(rows)

  return (
    <>

      {
        rows.length !== 0 ?
          <div>
            <DataGrid
              className='bg-white text-black'
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5
                  }
                }
              }}
              rows={rows}
              
              slots={{ 
                toolbar: CustomToolbar ,
                 
                pagination:CustomPagination,
              }}
              getRowId={(row) => row.ID}
              pageSizeOptions={[10]}
              //   checkboxSelection
              autoHeight
              columns={columns}
            />
          </div> :
          <div>
            <DataGrid
              className='bg-white text-black'
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10
                  }
                }
              }}
              rows={rows}
              slots={{ noRowsOverlay: CustomNoRowsOverlay }}
              pageSizeOptions={[10]}
              //   checkboxSelection
              autoHeight
              columns={columns}
              getRowHeight={() => 'auto'}
            />
          </div>

      }

    </>

  )
}

export default DataTable
