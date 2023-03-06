import React, { useEffect, useState } from 'react'
import './Generos.css'


const Generos = () => {

  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://e-books.onrender.com/api/products')
      .then(response => response.json())
      .then(({ countByGender }) => {
        return setList(countByGender)
      })
  }, [])
  /* console.log(list) */

  return (

    <div>
      <div className='container'>
        <h1>Generos</h1>

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
                    list !== [] && list.Fantasia && (
                      <>
                        <td>{list.Fantasia.name}</td>
                        <td>{list.Fantasia.total}</td>
                      </>
                    )
                  }
                </tr>
                <tr>
                  {
                    list !== [] && list.Economia && (
                      <>
                        <td>{list.Economia.name}</td>
                        <td>{list.Economia.total}</td>
                      </>
                    )
                  }
                </tr>
                <tr>
                  {
                    list !== [] && list.Literatura && (
                      <>
                        <td>{list.Literatura.name}</td>
                        <td>{list.Literatura.total}</td>
                      </>
                    )
                  }

                </tr>
                <tr>
                  {
                    list !== [] && list.Autoayuda && (
                      <>
                        <td>{list.Autoayuda.name}</td>
                        <td>{list.Autoayuda.total}</td>
                      </>
                    )
                  }

                </tr>
                <tr>
                  {
                    list !== [] && list.Accion && (
                      <>
                        <td>{list.Accion.name}</td>
                        <td>{list.Accion.total}</td>
                      </>
                    )
                  }

                </tr>
                <tr>
                  {
                    list !== [] && list.Liderazgo && (
                      <>
                        <td>{list.Liderazgo.name}</td>
                        <td>{list.Liderazgo.total}</td>
                      </>
                    )
                  }

                </tr>
                <tr>
                  {
                    list !== [] && list.Ficcion && (
                      <>
                        <td>{list.Ficcion.name}</td>
                        <td>{list.Ficcion.total}</td>
                      </>
                    )
                  }

                </tr>
                <tr>
                  {
                    list !== [] && list.Aventura && (
                      <>
                        <td>{list.Aventura.name}</td>
                        <td>{list.Aventura.total}</td>
                      </>
                    )
                  }

                </tr>
                <tr>
                  {
                    list !== [] && list.Romance && (
                      <>
                        <td>{list.Romance.name}</td>
                        <td>{list.Romance.total}</td>
                      </>
                    )
                  }

                </tr>
                <tr>
                  {
                    list !== [] && list.Drama && (
                      <>
                        <td>{list.Drama.name}</td>
                        <td>{list.Drama.total}</td>
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

export default Generos