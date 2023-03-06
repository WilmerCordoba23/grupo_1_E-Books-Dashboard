import React from 'react'
import './ListadoProductos.css'




const ListadoProductos= (producto) => {

   /* console.log(producto) */
    return(
        <tbody>
        <tr>
          <td>{producto.producto.id}</td>    
          <td>{producto.producto.name}</td>
          <td>{producto.producto.categoria.name}</td>
          <td>{producto.producto.genero.name}</td>
        </tr>
      </tbody>
    )
    

  }
  
  export default ListadoProductos