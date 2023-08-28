// assets
import { IconDashboard } from '@tabler/icons';
import {Person, Store} from '@mui/icons-material';

// constant
const icons = { IconDashboard, Person, Store};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'user',
      title: 'Usuarios',
      type: 'item',
      url: '/users',
      icon: icons.Person,
      breadcrumbs: false
    },
    {
      id: 'methods',
      title: 'Productos',
      type: 'item',
      url: '/products',
      icon: icons.Store,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
