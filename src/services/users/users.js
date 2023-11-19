import { supabase } from '../client';

export const getAllUsers = async () => {
  return await supabase.auth.admin.listUsers();
};

export const getOneUser = async (id) => {
  return await supabase.auth.admin.getUserById(id);
};

export const createUser = async (data) => {
  return await supabase.auth.admin.createUser({
    email: data?.email,
    password: data?.password,
    phone: data?.phone,
    user_metadata: {
      dni: data?.dni,
      first_name: data?.first_name,
      last_name: data?.last_name,
      city: data?.city,
      direction: data?.direction,
      direction_detail: data?.direction_detail,
      role: data?.role
    }
  });
};

export const updateUser = async (id, data) => {
  return await supabase.auth.admin.updateUserById(id, {
    email: data?.email,
    password: data?.password,
    phone: data?.phone,
    user_metadata: {
      dni: data?.dni,
      first_name: data?.first_name,
      last_name: data?.last_name,
      city: data?.city,
      direction: data?.direction,
      direction_detail: data?.direction_detail,
      role: data?.role
    }
  });
};
