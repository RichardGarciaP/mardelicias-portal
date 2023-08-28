import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  gap: 2
});
const TableActions = ({ onEdit, onDelete }) => {
  return (
    <Container>
      {onEdit && (
        <IconButton aria-label="delete" onClick={onEdit}>
          <Edit />
        </IconButton>
      )}
      {onDelete && (
        <IconButton aria-label="delete" onClick={onDelete}>
          <Delete />
        </IconButton>
      )}
    </Container>
  );
};

export default TableActions;
