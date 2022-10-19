import React, { useEffect, useState } from 'react'
import './UltimoProducto.css'
const UltimoProducto = ({ id }) => {


    const [UlProduct, setUlProduct] = useState([])

    useEffect(() => {

        fetch(`https://grupo-1-e-books.herokuapp.com/api/products/${id}`)
            .then(response => response.json())
            .then(product => {
                return setUlProduct(product)
            })

    }, [id])


    return (


        <div className='card col-12 col-md-2 ms-3'>

            <div >
                <div className='col'>
                    {id !== "undefined" && id !== 0 && UlProduct && (
                        <div className='card-body' key={UlProduct.id}>
                            <h5 className='card-title'>Ultimo Producto</h5>
                            {
                                UlProduct && UlProduct.image && (
                                    <img src={`${UlProduct.image}`} className='card-img' width={200} height={200} alt=''/>

                                )
                            }
                            {
                                UlProduct && UlProduct.title && (
                                    <h5 className='card-title'> {UlProduct.title}</h5>
                                )
                            }

                        </div>)
                    }
                </div>
            </div>
        </div>
    )

}

export default UltimoProducto
