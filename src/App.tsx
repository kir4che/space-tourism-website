import React from 'react';
import { useRoutes } from 'react-router-dom';

import './style.css';
import routeConfig from './routes'; 

const App: React.FC = () => {
  const element = useRoutes(routeConfig)

  return <>
    { element }
  </>
}

export default App;

