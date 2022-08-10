import { useRoutes } from 'react-router-dom';

import './style.css';
import routeConfig from './Routes'; 
import React from 'react';

const App: React.FC = () => {
  const element = useRoutes(routeConfig)

  return <>
    { element }
  </>
}

export default App;

