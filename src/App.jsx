import React, { useState } from 'react'

export function App() {
  // const [player, setPlayer] = useState({
  //   name: 'Joao',
  //   score: 0
  // })

  const [playerName, setPlayerName] = useState(() => {
    return 'Rafael'
  })

  const [playerScore, setPlayerScore] = useState(() => {
    return 0
  })

  function alterar() {
    setPlayerScore(playerScore => {
      return playerScore + 1
    })
  }

  return (
    <>
      <h1>React Hooks -useState</h1>
      <hr />
      <h3>Nome: {playerName}</h3>
      <h3>Pontos: {playerScore}</h3>
      <button onClick={alterar}>Score</button>
    </>
  )
}
