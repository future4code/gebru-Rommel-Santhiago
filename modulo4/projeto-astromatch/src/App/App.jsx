import React, { useState, useEffect} from 'react'
import axios from 'axios'
import * as Styled from './style'

import dark from '../img/dark.svg'
import light from '../img/light.svg'
import Home from '../Pages/Home'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rommel-santhiago-gebru/'

const App = () => {
  const [swipe, setSwipe] = useState(true)
  const [icon, setIcon] = useState(dark)
  const [color, setColor] = useState('#d0d0d0')
  const [borderColor, setBorderColor] = useState('black')
  const [justifyContent, setJustifyContent] = useState('flex-end')

  useEffect(() => {
    swipeMode(swipe)
  }, [swipe])

  const swipeMode = (swipe) => {
      if(swipe === true){
          setIcon(dark) 
          setColor('#d0d0d0')
          setBorderColor('black')
          setJustifyContent('flex-end')
      } else {
          setIcon(light) 
          setColor('black')
          setBorderColor('white')
          setJustifyContent('flex-start')
      }
  }

  const handleSwipe = () => {
    setSwipe(!swipe)
  }

  const clearSwipes = async () => {
    await axios.put(`${url}clear`)

    window.location.reload(false)
  }

  return (
    <Styled.Container backgroundColor={color} >
      <Home swipe={swipe} />
      <Styled.ButtonClear onClick={clearSwipes}>Limpar Swipes e Matchs</Styled.ButtonClear>
      <Styled.Button onClick={handleSwipe} borderColor={borderColor} justifyContent={justifyContent} >
        <Styled.Img src={icon} alt='modo' />
      </Styled.Button>
    </Styled.Container>
  )
}

export default App