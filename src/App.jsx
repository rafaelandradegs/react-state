import React, { useState } from 'react'

export function App() {
  function definirValor() {
    console.log('funcao sendo chamado')
    return 1000
  }

  const [valor, setValor] = useState(definirValor)
  // const [valor, setValor] = useState(() => {
  //   console.log('sendo chamado')
  //   return 1000
  // })
  // const [valor, setValor] = useState(() => {
  //   console.log('sendo chamado')
  //   return 1000
  // })

  function diminuir() {
    setValor(valor_antigo => valor_antigo - 1)
  }

  function aumentar() {
    setValor(valor_antigo => valor_antigo + 1)
  }

  return (
    <>
      <h1>React Hooks - useState</h1>
      <button onClick={diminuir}>Diminuir</button>
      <span> Valor: {valor} </span>
      <button onClick={aumentar}>Aumentar</button>

      <button
        onClick={() => {
          setValor(valor + 10)
        }}
      >
        Aumentar_v2
      </button>
    </>
  )
}
