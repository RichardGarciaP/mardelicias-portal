import MainCard from '../../../ui-component/cards/MainCard';
import CustomTable from '../../../ui-component/table/CustomTable';
import useUsers from '../../../hooks/useUsers';
import CustomLink from '../../../ui-component/custom-link/CustomLink';
import TableActions from '../../../ui-component/table/table-actions/TableActions';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { users, loading } = useUsers();

  const navigate = useNavigate();

  const onEdit = (id) => {
    navigate(`/users/${id}`);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1
    },
    { field: 'fist_name', headerName: 'First name', flex: 1, valueGetter: (params) => `${params.row.user_metadata.first_name || ''}` },
    { field: 'last_name', headerName: 'Last name', flex: 1, valueGetter: (params) => `${params.row.user_metadata.last_name || ''}` },
    {
      field: 'user_metadata',
      headerName: 'Nombre Completo',
      sortable: false,
      flex: 1,
      valueGetter: (params) => `${params.row.user_metadata.first_name || ''} ${params.row.user_metadata.last_name || ''}`
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'phone',
      headerName: 'Telefono',
      flex: 1
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: (params) => <TableActions onEdit={() => onEdit(params.row.id)} />
    }
  ];

  return (
    <>
      <MainCard title="Usuarios">
        <CustomTable rows={users} columns={columns} loading={loading} />
      </MainCard>
    </>
  );
};

export default Users;
