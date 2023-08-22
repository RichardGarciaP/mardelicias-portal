// assets
import { IconDashboard } from '@tabler/icons';
import {Person} from '@mui/icons-material';

// constant
const icons = { IconDashboard, Person };

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
  ]
};

export default dashboard;
