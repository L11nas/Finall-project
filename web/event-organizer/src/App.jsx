import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login';

import Users from './components/Users';

const routesDefinition = createBrowserRouter([
  {
    path: '/',

    children: [
      { path: '/login', element: <Login /> },
      { path: '/users', element: <Users /> },
    ],
  },
]);
const App = () => <RouterProvider router={routesDefinition} />;

export default App;
