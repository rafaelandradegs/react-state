import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

export function App() {
  const [valor, setValor] = useState(1)

  const multiplicar = () => {
    if (isNaN(valor)) return []
    let produtos = []
    for (let i = 1; i <= 10; i++) {
      produtos.push(`${valor} X ${i} = ${valor * i}`)
    }
    return produtos
  }

  return (
    <div>
      <h1>React - Tabuada</h1>
      <hr />
      <input
        type="number"
        value={valor}
        onChange={e => {
          setValor(parseInt(e.target.value))
        }}
      />
      {multiplicar().map(produto => {
        return <p key={uuid()}>{produto}</p>
      })}
    </div>
  )
}
