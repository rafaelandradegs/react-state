import React, { useEffect, useState } from 'react'
import { User } from './components/User'
import './style.css'

export const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json.users)
      })
  }, [])

  return (
    <>
      <h1>Lista de nomes</h1>
      {users.map(user => {
        return <User user={user} key={user.id} />
      })}
    </>
  )
}
