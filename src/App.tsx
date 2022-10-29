import { Typography } from '@mui/material';
import React from 'react';

import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './Router/Router'
function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
