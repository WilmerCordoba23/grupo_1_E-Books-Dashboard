import React, { useEffect, useState } from 'react'
import './UltimoUsuario.css'
const UltimoUsuario = ({ id }) => {


    const [UlUser, setUlUser] = useState([])

    useEffect(() => {

        fetch(`https://grupo-1-e-books.herokuapp.com/api/user/${id}`)
            .then(response => response.json())
            .then(User => {
                return setUlUser(User)
            })

    }, [id])


    return (


        <div className='card col-12 col-md-2 ms-3'>

            <div >
                <div className='col'>
                    {id !== "undefined" && id !== 0 && UlUser && (
                        <div className='card-body' key={UlUser.id}>
                            <h5 className='card-title'>Ultimo Usuario</h5>
                            {
                                UlUser && UlUser.image && (
                                    <img src={`${UlUser.image}`} className='card-img' width={200} height={200} alt=''/>

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
            </div>
        </div>
    )

}

export default UltimoUsuario
