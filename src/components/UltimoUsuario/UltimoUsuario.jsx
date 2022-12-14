import React, { useEffect, useState } from 'react'
import './UltimoUsuario.css'
const UltimoUsuario = ({ id }) => {


    const [UlUser, setUlUser] = useState([])

    useEffect(() => {

        fetch(`https://e-books.onrender.com/api/user/${id}`)
            .then(response => response.json())
            .then(User => {
                return setUlUser(User)
            })

    }, [id])


    return (


        <div className='card col-sm-6 col-lg-6  ms-6 mx-4'>

                    {id !== "undefined" && id !== 0 && UlUser && (
                        <div className='card-body' key={UlUser.id}>
                            <h5 className='card-title'>Ultimo Usuario</h5>
                            {
                                UlUser && UlUser.image && (
                                    <img src={`${UlUser.image}`} className='card-img' width={250} height={250} alt='userimage'/>

                                )
                            }
                            {
                                UlUser && UlUser.first_name && (
                                    <h5 className='card-title'> {UlUser.first_name}</h5>
                                )
                            }

                        </div>)
                    }
                </div>
    )

}

export default UltimoUsuario
