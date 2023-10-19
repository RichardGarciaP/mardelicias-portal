import React from 'react';
import MainCard from '../../../ui-component/cards/MainCard';
import { createUser } from '../../../services/users/users';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ProductDetailForm from '../../pages/products/ProductDetailForm';
import { insertEntity } from '../../../services/methods';

const ENTITY_NAME = 'products';

const ProductNew = () => {
  const navigation = useNavigate();
  const onSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    const { data, error } = await insertEntity(ENTITY_NAME, values);
    if (error) {
      setErrors({ submit: error.message });
      setStatus({ success: false });
      setSubmitting(false);
      toast.error('Error al crear el producto');
      return;
    }

    setStatus({ success: true });
    setSubmitting(false);

    toast.success('Producto creado correctamente');
    navigation('/products');
  };

  return (
    <MainCard title="Añadir Nuevo Producto">
      <ProductDetailForm onSubmit={onSubmit} />
    </MainCard>
  );
};

export default ProductNew;
