import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {styled} from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";

const TableWrapper = styled('div')({
    width: '100%'
});

const CustomTable = ({rows, columns, loading}) => {

    return (
        <TableWrapper>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                components={{
                    LoadingOverlay: Skeleton
                }}
                loading={loading}
                unstable_cellSelection
            />
        </TableWrapper>
    );
};

export default CustomTable;
