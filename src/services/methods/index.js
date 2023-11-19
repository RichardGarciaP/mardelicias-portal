import { supabase } from '../client';

export const getEntities = async (entityName) => await supabase.from(entityName).select();

export const getEntity = async (entityName, id) => await supabase.from(entityName).select().eq('id', id);

export const insertEntity = async (entityName, data) => await supabase.from(entityName).insert(data);

export const updateEntity = async (entityName, data) => await supabase.from(entityName).update(data).eq('id', data?.id);

export const deleteEntity = async (entityName, id) => await supabase.from(entityName).delete().eq('id', id);

export const uploadFile = async (name, file) => await supabase.storage.from('products').upload(`${name}-${file?.path}`, file);
