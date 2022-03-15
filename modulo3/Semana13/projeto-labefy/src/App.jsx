import React from 'react'
import styled from 'styled-components'

import Routes from './Routes'

const Title = styled.h1`
  margin: 0;
  text-align: center;
  color: whitesmoke;
  border-bottom: solid 3px #DE3163;
  background-color: #566573;
  padding: 10px 0;
`

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Title>PROJETO LABEFY</Title>
        <Routes />
      </div>
    )
  }
}