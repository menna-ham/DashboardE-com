import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React from 'react';
import { CustomToolbar } from './CustomToolbar';
import { CustomPagination } from './CustomPagination';
import { CustomNoRowsOverlay } from './CustomNoRowsOverlay';

interface DataTableProps {
  columns: GridColDef[];
  rows: GridRowsProp;
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows }) => {
  const rowCount = rows.length; // Total number of rows

  return (
    <>
      {rows.length !== 0 ? (
        <div>
          <DataGrid
            className="bg-white text-black"
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            rows={rows}
            rowCount={rowCount} // Pass row count to DataGrid
            slots={{
              toolbar: CustomToolbar,
              pagination: (props) => <CustomPagination {...props} count={rowCount} />, // Pass count to pagination
            }}
            getRowId={(row) => row.ID}
            pageSizeOptions={[10]}
            autoHeight
            columns={columns}
          />
        </div>
      ) : (
        <div>
          <DataGrid
            className="bg-white text-black"
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            rows={rows}
            rowCount={rowCount} // Ensure count is passed here as well
            slots={{ noRowsOverlay: CustomNoRowsOverlay }}
            pageSizeOptions={[10]}
            autoHeight
            columns={columns}
            getRowHeight={() => 'auto'}
          />
        </div>
      )}
    </>
  );
};

export default DataTable;
