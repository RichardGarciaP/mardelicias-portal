import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import SkeletonCustomTable from './Skeleton/SkeletonCustomTable';

const TableWrapper = styled('div')({
  width: '100%',
  '& .MuiDataGrid-overlayWrapper': {
    minHeight: '40px'
  }
});

const CustomTable = ({ rows, columns, loading, ...otherProps }) => {
  return (
    <>
      {loading ? (
        <SkeletonCustomTable />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 }
            }
          }}
          pageSizeOptions={[5, 10]}
          components={{
            LoadingOverlay: Skeleton
          }}
          loading={loading}
          unstable_cellSelection
          localeText={{ noRowsLabel: 'Información no disponible' }}
          {...otherProps}
        />
      )}
    </>
  );
};

export default CustomTable;
