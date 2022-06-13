import React, { useRef, useState, useEffect } from 'react'

export function App() {
  const [texto, setTexto] = useState('')
  const inputRef = useRef()
  const input2Ref = useRef()

  function focus1() {
    inputRef.current.focus()
  }
  function alterar_texto2() {
    input2Ref.current.value = 'Ola '
    input2Ref.current.focus()
  }

  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={e => {
          setTexto(e.target.value)
        }}
      />
      <br />
      <input type="text" ref={input2Ref} />
      <hr />
      <button onClick={focus1}>Focus 1</button>
      <button onClick={alterar_texto2}>Alterar texto 2</button>
    </>
  )
}
