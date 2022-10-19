import React  from 'react'
import TotalProductos from '../../components/totalProductos/totalProductos'
import TotalUsuarios from '../../components/TotalUsuarios/TotalUsuarios'
import TotalCategorias from '../../components/TotalCategorias/TotalCategorias'
import UltimoProducto from '../../components/UltimoProducto/UltimoProducto'

import './DashBoard.css'

const DashBoard = () => {


  
  return (
    <div> 
        <div className='container'>
            <h1>DashBoard</h1>
            <hr />
            <div className='justify-content-start gap-3 row'>
                {
                   <>  
                   <TotalProductos />

                 <TotalCategorias  />

                 <TotalUsuarios />
                 
                 </>
               
                  
                }

            </div>
        </div>
    </div>
  )
}

export default DashBoard