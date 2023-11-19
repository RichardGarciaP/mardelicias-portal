import MainCard from '../../../ui-component/cards/MainCard';
import CustomTable from '../../../ui-component/table/CustomTable';
import useEntity from '../../../hooks/useEntity';
import TableActions from '../../../ui-component/table/table-actions/TableActions';
import { useNavigate } from 'react-router-dom';
import { isBrowser } from '../../../utils/utils';

const Products = () => {
  const { data, isLoading, deleteProduct } = useEntity('products');
  const navigate = useNavigate();

  const onEdit = (id) => {
    navigate(`/products/${id}`);
  };

  const onDelete = (id) => {
    if (isBrowser() && window.confirm('¿Esta seguro de realizar la acción?')) {
      deleteProduct(id);
    }
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1
    },
    {
      field: 'name',
      headerName: 'Nombre',
      flex: 1
    },
    {
      field: 'price',
      headerName: 'Precio',
      flex: 1,
      valueGetter: (params) => `${params.row.price || ''}`
    },
    {
      field: 'stock',
      headerName: 'Existencias',
      sortable: false,
      flex: 1,
      valueGetter: (params) => `${params.row.stock || ''}`
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: (params) => <TableActions onEdit={() => onEdit(params.row.id)} onDelete={() => onDelete(params.row.id)} />
    }
  ];

  return (
    <>
      <MainCard title="Productos" addButtonLink={{ title: 'Añadir Producto', url: '/products/add' }}>
        <CustomTable rows={data} columns={columns} loading={isLoading} />
      </MainCard>
    </>
  );
};

export default Products;
