import useSWR from 'swr';
import { getOrder } from '../services/orders/orders';

const useOrderDescription = (id) => {
  const { data, error, isLoading } = useSWR(id ? `/order/${id}` : null, () => getOrder(id));
  return {
    data: data?.data[0] ?? null,
    isLoading,
    error
  };
};

export default useOrderDescription;
