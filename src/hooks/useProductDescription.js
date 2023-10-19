import useSWR from 'swr';
import { getEntity } from '../services/methods';

const useProductDescription = (id) => {
  const entity = 'products';
  const { data, error, isLoading } = useSWR(id ? `/product/${id}` : null, () => getEntity(entity, id));
  console.log(data);
  return {
    data: data?.data[0] ?? null,
    isLoading,
    error
  };
};

export default useProductDescription;
