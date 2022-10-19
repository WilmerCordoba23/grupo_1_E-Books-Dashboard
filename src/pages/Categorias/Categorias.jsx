import React from 'react'
import './Categorias.css'


const Categorias = () => {
  
  
  return(
  
    <div>
     <div className='container'>
        <h1>Categorias</h1>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Total de Productos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mas Vendidos</td>
                <td>4</td>

              </tr>
              <tr>
                <td>2</td>
                <td>Novedades</td>
                <td>3</td>
                
              </tr>
              <tr>
                <td>3</td>
                <td>Recomendados</td>
                <td>7</td>
                
              </tr>
            </tbody>
          </table>
        </div>
  
      </div>
    </div>)
     
  }
  
  export default Categorias