export const USERS_TYPE = ['admin', 'bodeguero', 'repartidor'];

export const USERS_TYPE_DEFINITIONS = {
  ADMIN: 'admin',
  WINEMARKER: 'bodeguero',
  DRIVER: 'repartidor'
};

export const ORDER_STATUS = ['procesando', 'preparado', 'enviado', 'entregado'];

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const dniRegExp = /^\d{10}$/;

export const IMAGE_URL = 'https://nmswwbindwiwxgeravfq.supabase.co/storage/v1/object/public/products/';
