import React from 'react'

function ConvocatoriasLayout({ children }) {
    {
        /**
         * Children es un objeto especial de react que permite.
         * 
         * cualquier componente puede aceptar y usar la propiedad children.
         * Cuando usamos layouts children cubre automáticamente nuestras páginas. 
         * Lo que de hecho significa que next envuelve automáticamente
         * nuestras paǵinas con el diseño del layout que hemos determinado.
         * 
         * Re redundante XD
         */
    }
  return (
    <>
        <h1 className='bold'>Layout general para convocatorias.</h1>
        {children}
    </>
  )
}

export default ConvocatoriasLayout