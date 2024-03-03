import Users from 'pages/Users';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const PageNotFound = lazy(() => import('pages/PageNotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};
export default Routes;
