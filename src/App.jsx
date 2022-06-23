import React, { useState } from 'react'

export function App() {
  const [valor, setValor] = useState(() => {
    return 0
  })

  function decremento() {
    setValor(() => {
      return valor - 1
    })
  }
  function incremento() {
    setValor(() => {
      return valor + 1
    })
  }

  return (
    <>
      <h2>App no servidor</h2>
      <hr />
      <p>Valor: {valor}</p>
      <button onClick={decremento}>Decremento</button>
      <button onClick={incremento}>Incremento</button>
    </>
  )
}
