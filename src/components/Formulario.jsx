import React, { useState } from 'react'

function Formulario() {

  const [fruta, setFruta] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [lista, setLista] = useState([])
  
  const guardarDatos = (e) => {
    e.preventDefault()
    
    if (!fruta.trim()){
      console.log('Esta vacío fruta')
      return
    }
    if (!descripcion.trim()){
      console.log('Esta vacío descripcion')
      return
    }

    console.log('Procesando Datos...' + fruta + descripcion)
    
    setLista([
      ...lista,
      { nombreFruta: fruta, nombreDescripcion: descripcion}
    ])
    
    e.target.reset()
    setFruta('')
    setDescripcion('')

  }

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={ guardarDatos }>
        <input
          type='text'
          placeholder='Ingrese Fruta'
          className='form-control mb-2'
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          type='text'
          placeholder='Ingrese Descripción'
          className='form-control mb-2'
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className='btn btn-primary btn-block' type='submit'>Agregar</button>
      </form>
      <ul>
        {
          lista.map((item, index) => (
            <li key={index}>
              {item.nombreFruta} - {item.nombreDescripcion}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Formulario