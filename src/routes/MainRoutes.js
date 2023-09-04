import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import UserDescription from '../views/dashboard/Users/UserDescription';
import Products from '../views/dashboard/Products';
import ProductDetails from '../views/dashboard/Products/ProductDetails';
import UserNew from '../views/dashboard/Users/UserNew';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Users = Loadable(lazy(() => import('views/dashboard/Users')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/users',
      children: [
        {
          path: '',
          element: <Users />
        },
        {
          path: ':id',
          element: <UserDescription />
        },
        {
          path: 'add',
          element: <UserNew />
        }
      ]
    },
    {
      path: '/products',
      children: [
        {
          path: '',
          element: <Products />
        },
        {
          path: ':id',
          element: <ProductDetails />
        },
        {
          path: 'add',
          element: <ProductDetails />
        }
      ]
    },
    {
      path: '/orders',
      element: <Products />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
