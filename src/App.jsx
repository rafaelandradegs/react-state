import React from 'react'
import { Componente1, Componente2, Componente3 } from './Componentes'

export function App() {
  return (
    <>
      <h2>React - Multiplos componentes no mesmo ficheiro</h2>
      <hr />
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </>
  )
}
