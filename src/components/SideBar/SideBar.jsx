import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './SideBar.css'


const SideBar = () => {
    return (


        <>
            <div className="sidebar">
                <NavLink to={`/`} >Dashboard</NavLink>
                <NavLink end to={`categorias`}>Categorias</NavLink>
                <NavLink end to={`generos`}>Generos</NavLink>
                <NavLink end to={`productos`}>Productos</NavLink>
            </div>

            <div className="content">
                <Outlet />
            </div>

        </>

    )
}

export default SideBar