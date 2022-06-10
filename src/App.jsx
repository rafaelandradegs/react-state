import React, { useState } from 'react'

export function App() {
  const [valor, setValor] = useState(0)

  function incrementar() {
    setValor(valor + 1)
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Valor = {valor}</h3>
      <button onClick={incrementar}>Incrementar</button>
    </>
  )
}
