import React from 'react'
import axios from 'axios'
import * as Styled from './style'

import Home from '../Pages/Home'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rommel-santhiago-gebru/'

const App = () => {
  const clearSwipes = async () => {
    await axios.put(`${url}clear`)

    window.location.reload(false)
  }

  return (
    <Styled.Container>
      <Home />
      <Styled.ButtonClear onClick={clearSwipes}>Limpar Swipes e Matchs</Styled.ButtonClear>
    </Styled.Container>
  )
}

export default App