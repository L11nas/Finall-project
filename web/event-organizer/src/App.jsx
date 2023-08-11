import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AdminLogin from './components/AdminLogin';
import RegistrationForm from './components/RegistrationForm';
import UsersList from './components/UsersList';

const routesDefinition = createBrowserRouter([
  {
    path: '/',

    children: [
      { path: '/login', element: <AdminLogin /> },
      { path: '/register', element: <RegistrationForm /> },
      { path: '/users', element: <UsersList /> },
    ],
  },
]);
const App = () => <RouterProvider router={routesDefinition} />;

export default App;
