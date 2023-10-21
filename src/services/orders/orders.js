import { supabase } from '../client';

const ENTITY_NAME = 'orders';

export const getOrders = async () =>
  await supabase.from(ENTITY_NAME).select(`id, created_at, payment_method, status, total, users (id, first_name, last_name)`);

export const getOrder = async (id) =>
  await supabase
    .from(ENTITY_NAME)
    .select(
      'id, created_at, payment_method, status, products, voucher_url, total, users (id, first_name, last_name, direction, direction_detail)'
    )
    .eq('id', id);

export const getTotalFromAllOrders = async () => await supabase.from(ENTITY_NAME).select('id, total').neq('status', 'entregado');
