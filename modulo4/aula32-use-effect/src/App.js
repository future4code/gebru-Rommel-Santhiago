import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import PokeCard from './components/PokeCard'

const Container = styled.div`
  text-align: center;
`

const App = () => {
  // lista de pokemons que está sendo guardada no estado
  const [pokeList, setPokeList] = useState([])
  // nome do pokemon guardado no estado, assim que o usuário escolhe um nome no dropdown
  const [pokeName, setPokeName] = useState('')

  // método que roda após a montagem do componente
  useEffect(() => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokeList( response.data.results )
      })
      .catch(err => {
        console.log(err)
      })
  })

  const changePokeName = e => {
    setPokeName( e.target.value )
  }

  return (
    <Container>
      <h1>PokeAPI com useEffect</h1>
      {/* evento onChange chama função toda vez que o usuário 
      escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </Container>
  )
}

export default App