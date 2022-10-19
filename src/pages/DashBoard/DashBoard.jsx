
import React, { useEffect, useState } from 'react'
import TotalProductos from '../../components/totalProductos/totalProductos'
import TotalUsuarios from '../../components/TotalUsuarios/TotalUsuarios'
import TotalCategorias from '../../components/TotalCategorias/TotalCategorias'
import UltimoProducto from '../../components/UltimoProducto/UltimoProducto'
import './DashBoard.css'
import UltimoUsuario from '../../components/UltimoUsuario/UltimoUsuario'

const DashBoard = () => {

  const [idProduct, setidProduct] = useState([])

  useEffect(() => {
    fetch(`https://grupo-1-e-books.herokuapp.com/api/products`)
      .then(response => response.json())
      .then(({ products }) => {

        let lastProducts = products.map(product => (
          (product.id)
        ))
        let idProduct = Math.max(...lastProducts)

        return setidProduct(idProduct)
      })
  }, [])

  const [idUser, setidUser] = useState([])

  useEffect(() => {
    fetch(`https://grupo-1-e-books.herokuapp.com/api/users`)
      .then(response => response.json())
      .then(({ users }) => {

        let lastUser = users.map(User => (
          (User.id)
        ))
        let idUser = Math.max(...lastUser)

        return setidUser(idUser)
      })
  }, [])

  return (
    <div>
      <div className='container'>
        <h1>DashBoard</h1>
        <hr />
        <div className='justify-content-start gap-3 row'>
          {
            <>
              <TotalProductos />

              <TotalCategorias />

              <TotalUsuarios />
              {
                idProduct != "undefined" && idProduct && (
                  <UltimoProducto id={idProduct} />)
              }

              {
                idUser != "undefined" && idUser && (
                  <UltimoUsuario id={idUser} />)
              }
            </>

          }

        </div>
      </div>
    </div>
  )
}

export default DashBoard