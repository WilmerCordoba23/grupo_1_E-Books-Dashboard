import React from 'react'
import TotalProductos from '../../components/totalProductos/totalProductos'


const DashBoard = () => {

  return (
    <div> 
        <div className='container'>
            <h1>DashBoard</h1>
            <hr />
            <div className='justify-content-start gap-3 row'>
                {
                   
                 <TotalProductos />
                  
                }

            </div>
        </div>
    </div>
  )
}

export default DashBoard