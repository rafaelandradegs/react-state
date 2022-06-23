import React, { useEffect, useState } from 'react'

export const Lista = ({ resultados }) => {
  const [listaItems, setListaItems] = useState(() => {
    return []
  })

  useEffect(() => {
    setListaItems(resultados())
    console.log('render')
  }, [resultados])
  return listaItems.map(item => <p key={item}>{item} </p>)
}
