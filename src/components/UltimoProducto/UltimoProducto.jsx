import React, { useEffect, useState } from 'react'
import './UltimoProducto.css'
const UltimoProducto = ({ id }) => {


    const [UlProduct, setUlProduct] = useState([])

    useEffect(() => {

        fetch(`https://e-books.onrender.com/api/products/${id}`)
            .then(response => response.json())
            .then(product => {
                return setUlProduct(product)
            })

    }, [id])


    return (


        <div className='card col-sm-6 col-lg-6  ms-6 mx-4'>

                    {id !== "undefined" && id !== 0 && UlProduct && (
                        <div className='card-body' key={UlProduct.id}>
                            <h5 className='card-title'>Ultimo Producto</h5>
                            {
                                UlProduct && UlProduct.image && (
                                    <img src={`${UlProduct.image}`} className='card-img' width={250} height={250} alt='producimage'/>

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
    )

}

export default UltimoProducto
