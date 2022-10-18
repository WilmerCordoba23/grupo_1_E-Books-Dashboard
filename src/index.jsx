import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,RouterProvider } from "react-router-dom";
import SideBar from './components/SideBar/SideBar'
import  DashBoard from './pages/DashBoard/DashBoard';


import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar /> ,
    children: [
      {
        index:true,
        element: <DashBoard />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
