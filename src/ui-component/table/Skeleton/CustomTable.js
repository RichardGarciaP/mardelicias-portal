import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const CustomTable = () => {
  return (
    <div>
      <TableRow>
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
