import React, { useEffect, useState } from 'react'
import './TotalUsuarios.css'
const TotalUsuarios = () => {


 
 const [total, setTotal] = useState([])
    useEffect(() => {
        fetch('https://grupo-1-e-books.herokuapp.com/api/users')
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
                    <h5 className='card-title'>Total Usuarios</h5>
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



export default TotalUsuarios