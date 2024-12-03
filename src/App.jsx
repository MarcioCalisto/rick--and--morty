import { useState } from 'react'
import './App.css'

/**
 * Nome do arquivo: App.jsx
 * 
 * @author Marcio 
 *
 * Descrição:
 * Este arquivo React é responsável por implementar as funcionalidades
 * de interação do usuário com a interface gráfica da RickAndMortyAPI.
 * Aqui são tratados eventos de cliques, validações de entrada e comunicação
 * com APIs para envio e recebimento de dados.
 */

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
