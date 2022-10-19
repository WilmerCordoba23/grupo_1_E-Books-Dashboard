
import React, { useEffect, useState } from 'react'
import './TotalCategorias.css'
const TotalCategorias = () => {


 
    const [total, setTotal] = useState([])
    useEffect(() => {
        fetch('https://grupo-1-e-books.herokuapp.com/api/products')
        .then(response => response.json())
        .then(({countByCategory}) => {
            return setTotal(countByCategory)
        })
    }, [])
  return (
  
  
    <div className='card col-12 col-md-2 ms-3'>
       
        <div >
            <div className='col'>
                <div className='card-body'>
                    <h5 className='card-title'>Total Categorias</h5>
                    {
                total && ( 
                  <h5 className='card-title'><strong>Total:</strong> {Object.values(total).length}</h5>
                )
             }  
                </div>
            </div>
        </div>
    </div>
  )
  
  
}



export default TotalCategorias