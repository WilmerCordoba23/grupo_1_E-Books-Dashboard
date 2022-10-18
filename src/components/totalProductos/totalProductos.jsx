
import React, { useEffect, useState } from 'react'

const TotalProductos = () => {


 
 const [total, setTotal] = useState([])
    useEffect(() => {
        fetch('https://dh-heroes-app.herokuapp.com/api/heroes')
        .then(response => response.json())
        .then(({data}) => {
            return setTotal(data)
        })
    }, [])
   console.log(total)
  return (
    
    <div className='card col-12 col-md-2 ms-3'>
       
        <div >
            <div className='col'>
                <div className='card-body'>
                    <h5 className='card-title'>Total Productos</h5>
                    {
                total && total.count && ( 
                  <h5 className='card-title'><strong>Total:</strong> {total.count.count}</h5>
                )
             }  
                </div>
            </div>
        </div>
    </div>
  )
  
}



export default TotalProductos