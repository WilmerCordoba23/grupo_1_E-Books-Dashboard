import React, { useEffect, useState } from 'react'
import './Categorias.css'


const Categorias = () => {

  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://e-books.onrender.com/api/products')
      .then(response => response.json())
      .then(({ countByCategory }) => {
        return setList(countByCategory)
      })
  }, [])
  /* console.log(list) */

  return (

    <div>
      <div className='container'>
        <h1>Categorias</h1>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Total de Productos</th>
              </tr>
            </thead>
            <>
              <tbody>
                <tr>
                  {
                    list !== [] && list.Masvendidos && (
                      <>
                        <td>{list.Masvendidos.name}</td>
                        <td>{list.Masvendidos.total}</td>
                      </>
                    )
                  }
                </tr>
                <tr>
                  {
                    list !== [] && list.Novedades && (
                      <>
                        <td>{list.Novedades.name}</td>
                        <td>{list.Novedades.total}</td>
                      </>
                    )
                  }
                </tr>
                <tr>
                  {
                    list !== [] && list.Recomendados && (
                      <>
                        <td>{list.Recomendados.name}</td>
                        <td>{list.Recomendados.total}</td>
                      </>
                    )
                  }
                </tr>
              </tbody>
            </>
          </table>
        </div>

      </div>
    </div>)

}

export default Categorias