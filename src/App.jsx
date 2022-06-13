import React, { useState, useEffect } from 'react'

export function App() {
  const clientes = ['Joao', 'Ana', 'Carlos']
  const produtos = ['Pao', 'Manteiga', 'Leite']
  const vendas = ['1 x Pao (Joao)', '2 x Manteiga (Ana)', '3 x Leite (Carlos)']

  const [info, setInfo] = useState('clientes')
  const [valor, setValor] = useState(100)

  useEffect(() => {
    // console.clear()
    switch (info) {
      case 'clientes':
        console.table(clientes)
        break

      case 'produtos':
        console.table(produtos)
        break

      case 'vendas':
        console.table(vendas)
        break
    }
  }, [info])

  useEffect(() => {
    console.log('Teste')
  }, [valor])

  return (
    <>
      <h1>React Hooks - useEffect</h1>
      <hr />
      <button onClick={() => setInfo('clientes')}>Cliente</button>
      <button onClick={() => setInfo('produtos')}>Produtos</button>
      <button onClick={() => setInfo('vendas')}>Vedas</button>
      <h3>{info}</h3>

      <h3>{valor}</h3>

      <button onClick={() => setValor(valor + 10)}>Almentar</button>
    </>
  )
}
