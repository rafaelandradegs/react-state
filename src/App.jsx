import React, { useState, useCallback } from 'react'
import { Lista } from './Lista'

export function App() {
  const [numero, setNumero] = useState(() => {
    return 100
  })
  const [temaEscuro, setTemaEscuro] = useState(() => {
    return false
  })

  const tema = {
    background: temaEscuro ? 'black' : 'white',
    color: temaEscuro ? 'white' : 'black',
    height: '100vh'
  }

  const resultados = useCallback(() => {
    return [numero * 2, numero * 3, numero * 4]
  }, [numero])

  return (
    <div style={tema}>
      <h1>REACT - useCallback</h1>
      <hr />
      <button
        onClick={() => {
          setTemaEscuro(!temaEscuro)
        }}
      >
        Alterar Tema
      </button>
      <p>Numero: {numero}</p>
      <button
        onClick={() => {
          setNumero(numero + 1)
        }}
      >
        Incrementar
      </button>
      <hr />
      <Lista resultados={resultados} />
    </div>
  )
}
