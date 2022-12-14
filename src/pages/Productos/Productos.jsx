import React, { useEffect, useState } from 'react'
import './Productos.css'
import ListadoProductos from '../../components/ListadoProductos/ListadoProductos'



const Productos = () => {

  const [list, setList] = useState([])
  useEffect(() => {
      fetch('https://e-books.onrender.com/api/products')
      .then(response => response.json())
      .then(({products}) => {
          return setList(products)
      })
  }, []) 


 
  return(
  
    <div>
     <div className='container'>
        <h1>Productos</h1>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Genero</th>
              </tr>
            </thead>

            {
                    list.map(producto => (
                        <ListadoProductos key={producto.id} producto = {producto} />
                    ))
                }
            
          </table>
        </div>
  
      </div>
    </div>)
     
  }
  
  export default Productos