import React, { useState } from 'react'

export function App() {
  const [escuro, setEscuro] = useState(() => {
    return false
  })

  const tema = {
    backgroundColor: escuro ? 'black' : 'white',
    color: escuro ? 'white' : 'black',
    height: '100vh'
  }

  function alteraTema() {
    setEscuro(escuro => {
      return !escuro
    })
  }

  return (
    <div style={tema}>
      <h1>React - Tema Claro / Escuro</h1>
      <hr />
      <button onClick={alteraTema}>Tema</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        deserunt sit magni quo ratione, eos eveniet non numquam beatae minus
        illo distinctio perferendis modi similique aut fugiat id vero quos?
        Deserunt fugit et tempore aspernatur eveniet? Veniam, sunt dolor quod
        recusandae voluptatem delectus corrupti sit quaerat libero cumque
        quibusdam est unde non dolores quam quasi culpa similique atque adipisci
        numquam? Voluptatum, iure laboriosam. Sed, veritatis. Delectus cumque
        ipsum nostrum error ratione, iste incidunt nam quas. Corporis dolorum
        accusamus necessitatibus saepe. Impedit, beatae! Autem id, iusto
        molestias voluptas numquam perferendis totam. Quo nisi quas pariatur!
        Vitae, commodi necessitatibus qui itaque quas fugit consequatur
        doloremque, corporis nemo velit officia nulla libero? Totam, sint
        maxime? Officia, quia veritatis asperiores esse atque provident
        expedita. Quae saepe illum, natus sapiente deserunt accusamus fugit
        reiciendis, dolores amet facilis ratione culpa temporibus alias repellat
        minus cum velit dolorum aliquam sed veniam optio magnam voluptatem
        cumque autem. Fuga. Praesentium mollitia magni suscipit recusandae
        repellat alias necessitatibus animi similique quisquam. Suscipit, quas
        possimus eligendi sit sint consectetur, ipsam, modi expedita rerum
        explicabo quis pariatur unde! Ipsam impedit temporibus doloribus?
        Repudiandae optio illum iusto ipsa impedit neque ducimus nostrum quis
        ullam libero nemo ipsum eaque nisi dolor adipisci quisquam modi autem
        quod, iste eius quidem? Neque officiis aliquid fuga a? At voluptate
        deserunt perspiciatis culpa corporis sequi commodi laudantium ex officia
        nam delectus doloremque voluptatibus, repudiandae praesentium, non
        sapiente fugit veniam dolorem explicabo quisquam ea. Placeat quam dicta
        explicabo animi. Impedit rem non, architecto officia deleniti aspernatur
        praesentium dolor, ipsam nam a harum similique libero! Reprehenderit
        tenetur cupiditate nesciunt, rerum ipsum repellendus voluptas in
        mollitia, iure amet odit, laborum quas! Quaerat maiores eaque veniam id
        itaque iste sed labore ratione officia sit totam repudiandae quam,
        dignissimos tenetur iure voluptatum sunt quasi. Omnis nam impedit at
        unde debitis eius molestias ab.
      </p>
    </div>
  )
}
