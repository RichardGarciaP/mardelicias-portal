import MainCard from "../../../ui-component/cards/MainCard";
import CustomTable from "../../../ui-component/table/CustomTable";
import CustomLink from "../../../ui-component/custom-link/CustomLink";
import useProducts from "../../../hooks/useProducts";
import TableActions from "../../../ui-component/table/table-actions/TableActions";
import {useNavigate} from "react-router-dom";
import {isBrowser} from "../../../utils/utils";

const Products = () => {

    const {products, loading, deleteProduct} = useProducts();
    const navigate = useNavigate();

    const onEdit = (id) => {
        navigate(`/products/${id}`);
    }

    const onDelete = (id) => {
        if(isBrowser() && window.confirm('¿Esta seguro de realizar la acción?')){
            deleteProduct(id)
        }
    }


    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1,
        },
        {
            field: 'name',
            headerName: 'Nombre',
            flex: 1,
            renderCell: (params) => <CustomLink url={`${params.row.id}`} title={params.row.name} />

        },
        {
            field: 'price',
            headerName: 'Precio',
            flex:1,
            valueGetter: (params) => `${params.row.price || ''}`
        },
        {
            field: 'stock',
            headerName: 'Existencias',
            sortable: false,
            flex:1,
            valueGetter: (params) =>
                `${params.row.stock || ''}`,


        },
        {
            field:'actions',
            headerName: 'Acciones',
            renderCell:(params) =>
                <TableActions
                onEdit={() => onEdit(params.row.id)}
                onDelete={() => onDelete(params.row.id)} />
        }
    ];

    return (
        <>
            <MainCard title="Productos">
                <CustomTable rows={products} columns={columns} loading={loading} />
            </MainCard>

        </>
    );
};

export default Products;