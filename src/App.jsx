import React, { useRef, useState, useEffect } from 'react'

export function App() {
  const [texto, setTexto] = useState('')
  const total = useRef(0)

  useEffect(() => {
    total.current++
  })

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input
        type="text"
        value={texto}
        onChange={e => {
          setTexto(e.target.value)
        }}
      />
      <hr />
      <p>O texto digitado e: {texto}</p>
      <hr />
      <p>Total: {total.current}</p>
    </>
  )
}
