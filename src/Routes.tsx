import React from 'react';
import { RouteObject } from 'react-router-dom';

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/destination',
    element: <Destination />,
  },
  {
    path: '/crew',
    element: <Crew />,
  },
  {
    path: '/technology',
    element: <Technology />,
  },
]

export default routeConfig;
