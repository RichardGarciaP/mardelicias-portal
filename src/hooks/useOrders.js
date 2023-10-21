import useSWR from 'swr';

import { getOrders, getTotalFromAllOrders } from '../services/orders/orders';
import { useEffect, useState } from 'react';

const useOrders = () => {
  const ENTITY = 'orders';
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSells, setTotalSells] = useState(0);

  const { data, error, isLoading } = useSWR(`/${ENTITY}`, () => getOrders(ENTITY));
  const { data: dataTotalSell, isLoading: isLoadingTotalSells } = useSWR(`/${ENTITY}/totals`, () => getTotalFromAllOrders(ENTITY));

  const getTotalSells = () => {
    let totalSum = 0;
    data?.data?.forEach(({ total }) => {
      totalSum += total;
    });
    setTotalOrders(totalSum);
  };

  const getTotalOrders = () => {
    let totalSum = 0;
    dataTotalSell?.data?.forEach(({ total }) => {
      totalSum += total;
    });
    setTotalSells(totalSum);
  };

  useEffect(() => {
    if (data?.data?.length > 0 && !isLoading) getTotalSells();
  }, [data, data?.data]);

  useEffect(() => {
    if (dataTotalSell?.data?.length > 0 && !isLoadingTotalSells) getTotalOrders();
  }, [dataTotalSell, dataTotalSell?.data]);

  return {
    data: data?.data,
    totalOrders,
    totalSells,
    isLoading,
    isLoadingTotalSells,
    error
  };
};

export default useOrders;
