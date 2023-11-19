import React, { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

import ProductDetailForm from '../../pages/products/ProductDetailForm';
import MainCard from '../../../ui-component/cards/MainCard';

import useProductDescription from '../../../hooks/useProductDescription';
import { updateEntity } from '../../../services/methods';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const { data, isLoading } = useProductDescription(id);

  const onSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    const { error } = await updateEntity('products', { id, ...values });

    if (error) {
      setErrors({ submit: error.message });
      setStatus({ success: false });
      setSubmitting(false);
      toast.error('Error al actualizar el producto');
      return;
    }
    setStatus({ success: true });
    setSubmitting(false);

    toast.success('Producto actualizado correctamente');
    navigation('/products');
  };

  if (isLoading) return null;

  return (
    <MainCard title="Descripción del Producto">
      <ProductDetailForm
        onSubmit={onSubmit}
        initialValues={{
          ...data
        }}
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
    </MainCard>
  );
};

export default ProductDetails;
