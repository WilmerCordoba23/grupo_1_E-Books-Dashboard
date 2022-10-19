
import React, { useEffect, useState } from 'react'
import './totalProductos.css'
const TotalProductos = () => {


 
 const [total, setTotal] = useState([])
    useEffect(() => {
        fetch('https://grupo-1-e-books.herokuapp.com/api/products')
        .then(response => response.json())
        .then(({count}) => {
            return setTotal(count)
        })
    }, [])
    
  return (
  
  
    <div className='card col-12 col-md-2 ms-3'>
       
        <div >
            <div className='col'>
                <div className='card-body'>
                    <h5 className='card-title'>Total Productos</h5>
                    {
                total && ( 
                  <h5 className='card-title'><strong>Total:</strong> {total}</h5>
                )
             }  
                </div>
            </div>
        </div>
    </div>
  )
  
}



export default TotalProductos