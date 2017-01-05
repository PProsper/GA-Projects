import React from 'react'

let App= function(props) {
  return (
    <div>
      <header>
        <h1>Make Your Pokemon! </h1>
        <hr />
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <hr />
        Data Served From: <a href="https://pokeapi.co">Pokeapi.co</a>
      </footer>
    </div>
  )
}

export default App
