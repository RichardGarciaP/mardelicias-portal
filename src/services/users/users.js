import { supabase } from '../client';

export const getAllUsers = async () => {
  return await supabase.auth.admin.listUsers();
};

export const getOneUser = async (id) => {
  return await supabase.auth.admin.getUserById(id);
};

export const createUser = async ({ first_name, last_name, phone, email, password }) => {
  return await supabase.auth.admin.createUser({
    email,
    phone,
    password,
    user_metadata: {
      first_name,
      last_name
    }
  });
};

export const updateUser = async (id, data) => {
  return await supabase.auth.admin.updateUserById(id, {
    phone: data?.phone,
    email: data?.email,
    password: data?.password,
    user_metadata: {
      first_name: data?.first_name,
      last_name: data?.last_name,
      user_type: data?.user_type
    }
  });
};
