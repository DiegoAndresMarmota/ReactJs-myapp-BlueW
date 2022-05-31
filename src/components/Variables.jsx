import React from 'react'

function Variables() {

    const saludo = 'Hola desde constante'
    const imagen = 'https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-770x413.jpg'

  return (
    <div>
          <h2>Nuevo Componente {saludo}</h2>      
          <img src={imagen} alt='' />
    </div>
  )
}

export default Variables