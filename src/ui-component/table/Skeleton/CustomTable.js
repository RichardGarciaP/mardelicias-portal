import React from 'react';
import {TableCell, TableRow} from "@mui/material";

const CustomTable = () => {
    return (
        <div>
            <TableRow key={index}>
                <TableCell component="th" scope="row">
                    <Skeleton animation="wave" variant="text" />
                </TableCell>
                <TableCell>
                    <Skeleton animation="wave" variant="text" />
                </TableCell>
                <TableCell>
                    <Skeleton animation="wave" variant="text" />
                </TableCell>
                <TableCell>
                    <Skeleton animation="wave" variant="text" />
                </TableCell>
            </TableRow>
        </div>
    );
};

export default CustomTable;
