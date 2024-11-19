import { useState } from 'react'
import './App.css'

function App() {

  const [getIMG, setIMG] = useState("");
  const [userId, setUserId] = useState("");


  const consultar = async () => {
    const resultado_api = await fetch("https://rickandmortyapi.com/api/character/${userId}")
    const resultado_obj = await resultado_api.json();
    console.log(resultado_obj)
    setIMG(resultado_obj.image)
  }

  const receberID = (event) => {
    console.log(event.target.value)
    setUserId(event.target.value)
  }

  return (
    <>
      <img src={getIMG} alt="Personagem" />

      <form>
        <input type="search" placeholder="Pesquisar" aria-label="Pesquisar" onChange={(e) => receberID(e)} />
        <button onClick={consultar()}>Pesquisar</button>
      </form>
    </>
  )
}

export default App
