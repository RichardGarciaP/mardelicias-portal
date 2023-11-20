import React, { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

import ProductDetailForm from '../../pages/products/ProductDetailForm';
import MainCard from '../../../ui-component/cards/MainCard';

import useProductDescription from '../../../hooks/useProductDescription';
import { updateEntity, uploadFile } from '../../../services/methods';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { mutate } from 'swr';

const ProductDetails = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const { data, isLoading } = useProductDescription(id);

  const onSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedImage) {
      setSubmitting(true);
      const { data: imageData, error: errorImage } = await uploadFile(uuidv4(), selectedImage);
      console.log(imageData);
      if (errorImage) {
        setErrors({ submit: 'Ha ocurrido un error, vuelva a intentarlo' });
        console.log(errorImage);
        return;
      }
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
      mutate('/products');
      mutate(`/product/${id}`);
      toast.success('Producto actualizado correctamente');
      navigation('/products');
      return;
    }
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
