import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Registrater';
import Users from './components/Users';

const routesDefinition = createBrowserRouter([
  {
    path: '/',

    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/users', element: <Users /> },
    ],
  },
]);
const App = () => <RouterProvider router={routesDefinition} />;

export default App;
