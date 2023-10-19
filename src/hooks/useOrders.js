import useSWR from 'swr';

import { getOrders } from '../services/orders/orders';

const useOrders = () => {
  const ENTITY = 'orders';
  const { data, error, isLoading } = useSWR(`/${ENTITY}`, () => getOrders(ENTITY));

  return {
    data: data?.data,
    isLoading,
    error
  };
};

export default useOrders;
