import React from 'react';
import { GridPagination, useGridApiContext, useGridSelector, gridPageCountSelector } from "@mui/x-data-grid";
import MuiPagination from '@mui/material/Pagination';
import { TablePaginationProps } from '@mui/material/TablePagination';

interface PaginationComProps {
  page: number;
  count: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void; // Change to MouseEvent
  className?: string;
}

export function PaginationCom({ page, count, onPageChange, className }: PaginationComProps): JSX.Element {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount} 
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as React.MouseEvent<HTMLButtonElement> | null, newPage - 1); // Correct event type
      }}
    />
  );
}

export function CustomPagination(props: Partial<TablePaginationProps>): JSX.Element {
  return <GridPagination ActionsComponent={PaginationCom} {...props} />;
}
