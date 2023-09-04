import { deleteEntity, getEntities, insertEntity, updateEntity } from '../services/methods';
import useSWR, { mutate } from 'swr';

const useProducts = () => {
  const ENTITY_NAME = 'products';
  const { data, error, isLoading } = useSWR(ENTITY_NAME ? `/${ENTITY_NAME}` : null, () => getEntities(ENTITY_NAME));

  const deleteProduct = (id) => {
    deleteEntity(ENTITY_NAME, id).then(() => mutate(`/${ENTITY_NAME}`));
  };

  const insertProduct = async (data) => {
    await insertEntity(ENTITY_NAME, data);
  };

  const editProduct = async (id, data) => {
    await updateEntity(ENTITY_NAME, { ...data, id });
  };

  return {
    products: data?.data,
    isLoading,
    error,
    insertProduct,
    editProduct,
    deleteProduct
  };
};

export default useProducts;
