import { Box, styled } from "@mui/material";
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import { TbTableExport } from "react-icons/tb";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { LiaFilterSolid } from "react-icons/lia";

const CustomButton = styled('button')(({ theme }) => ({
  // backgroundColor: theme.palette.success.main,
  // backgroundColor:'rgb(241 245 249)  !important',
  color: 'rgb(115,103,240) !important',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  borderColor:'rgb(115,103,240) !important',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(226 232 240) !important',
  },
  margin: theme.spacing(1),
}));


export function CustomToolbar() {
    return (
      <GridToolbarContainer className="flex flex-row justify-end ">
        <GridToolbarColumnsButton  slotProps={{
            button: { variant: 'outlined', component: CustomButton, startIcon: <BsLayoutThreeColumns />, // Custom icon
               },
          }}/>

        <GridToolbarFilterButton slotProps={{
            tooltip: { title: 'Filter Table'},
            button: { variant: 'outlined', component: CustomButton, startIcon: <LiaFilterSolid />, // Custom icon
               }, 
          }}/>
        
        <GridToolbarExport
          slotProps={{
            tooltip: { title: 'Export Table'},
            button: { variant: 'outlined', component: CustomButton, startIcon: <TbTableExport />, // Custom icon
               },
          }}
        />
      </GridToolbarContainer>
    );
  }
  