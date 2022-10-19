import React, { useEffect, useState } from 'react'
import './UltimoProducto.css'
const UltimoProducto = () => {
 
 const [total, setTotal] = useState([])
    useEffect(() => {
        fetch('https://grupo-1-e-books.herokuapp.com/api/products')
        .then(response => response.json())
        .then(({products}) => {
            return setTotal(products)
        })
    }, [])

    
    let lastProducts =  total.map(last => (
            (last.id)
        ))

      let lastProduct =  Math.max(...lastProducts)

    console.log(lastProduct)


    const [totals, setTotals] = useState([])
    useEffect(() => {
        fetch(`https://grupo-1-e-books.herokuapp.com/api/products/${lastProduct}`)
        .then(response => response.json())
        .then((last) => {
            return setTotals(last)
        })
    }, [lastProduct])   

    console.log(totals)
  return (
  
  
    <div className='card col-12 col-md-2 ms-3'>
       
        <div >
            <div className='col'>
                <div className='card-body'>
                    <h5 className='card-title'>Ultimo Producto</h5>
                    {
                total && ( 
                  <h5 className='card-title'> {total}</h5>
                )
             }  
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default UltimoProducto
