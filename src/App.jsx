import React, { useId } from 'react'

export function App() {
  const id1 = useId()
  const id2 = useId()

  return (
    <>
      <h1>React - useId</h1>
      <hr />
      <form action="#" method="post">
        <div>
          <input type="checkbox" name="checkbox1" id={id1} />
          <label htmlFor={id1}>CheckBox 1</label>
        </div>
        <hr />
        <div>
          <input type="checkbox" name="checkbox2" id={id2} />
          <label htmlFor={id2}>CheckBox 2</label>
        </div>
      </form>
    </>
  )
}
