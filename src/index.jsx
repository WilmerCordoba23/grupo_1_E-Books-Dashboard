import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,RouterProvider } from "react-router-dom";
import SideBar from './components/SideBar/SideBar'
import  DashBoard from './pages/DashBoard/DashBoard';


import './index.css';
import Categorias from './pages/Categorias/Categorias';
import Productos from './pages/Productos/Productos';
import Generos from './pages/Generos/Generos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar /> ,
    children: [
      {
        index:true,
        element: <DashBoard />,
      },
      {
        path: 'categorias',
        element: <Categorias />,
      },
      {
        path: 'productos',
        element: <Productos />,
      },{
        path: 'generos',
        element: <Generos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
