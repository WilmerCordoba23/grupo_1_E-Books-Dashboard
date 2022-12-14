
import React, { useEffect, useState } from 'react'
import './totalProductos.css'
const TotalProductos = () => {



  const [total, setTotal] = useState([])
  useEffect(() => {
    fetch('https://e-books.onrender.com/api/products')
      .then(response => response.json())
      .then(({ count }) => {
        return setTotal(count)
      })
  }, [])

  return (


    <div className='card col-sm-6 col-lg-3 mx-2'>


      <div className='card-body'>
        <h5 className='card-title'>Total Productos</h5>
        {
          total && (
            <h5 className='card-title'><strong>Total:</strong> {total}</h5>
          )
        }
      </div>

    </div>
  )

}



export default TotalProductos