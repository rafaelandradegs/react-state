import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

export function App() {
  const [tabuada, setTabuada] = useState(() => {
    return 0
  })

  const [resultadoTabuada, setResultadoTabuada] = useState(() => {
    return []
  })

  function calculaTabuada() {
    setResultadoTabuada([])
    for (let i = 0; i <= 10; i++) {
      setResultadoTabuada(old => [...old, { equacao: tabuada * i, id: uuid() }])
    }
  }

  return (
    <div>
      <h1>React - Tabuada</h1>
      <hr />
      <input
        type="number"
        value={tabuada}
        onChange={e => {
          setTabuada(e.target.value)
        }}
      />
      <button onClick={calculaTabuada}>Calcular</button>

      {resultadoTabuada.map(tabuada => {
        return (
          <p key={tabuada.id}>
            {tabuada.equacao} uuid: {tabuada.id}
          </p>
        )
      })}
    </div>
  )
}
