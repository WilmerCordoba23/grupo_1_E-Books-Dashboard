
import React, { useEffect, useState } from 'react'
import './TotalGeneros.css'
const TotalGeneros = () => {



    const [total, setTotal] = useState([])
    useEffect(() => {
        fetch('https://e-books.onrender.com/api/products')
            .then(response => response.json())
            .then(({ countByGender }) => {
                return setTotal(countByGender)
            })
    }, [])
    return (


        <div className='card col-sm-6 col-lg-4  mx-2'>

            <div className='card-body'>
                <h5 className='card-title'>Total Generos</h5>
                {
                    total && (
                        <h5 className='card-title'><strong>Total:</strong> {Object.values(total).length}</h5>
                    )
                }
            </div>

        </div>
    )


}



export default TotalGeneros