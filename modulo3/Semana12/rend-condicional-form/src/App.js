import React from 'react'
import styled from 'styled-components'
import Pagina1 from './Pages/Pagina1'
import Pagina2 from './Pages/Pagina2'
import Pagina3 from './Pages/Pagina3'
import PaginaFinal from './Pages/PaginaFinal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pagina: 1
    }
  }

  MostraPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return <Pagina1 />
      case 2:
        return <Pagina2 />
      case 3:
        return <Pagina3 />
      case 4:
        return <PaginaFinal />
      default:
        return <h1>Não há próxima pagina</h1>
    }
  }

  proximaPagina = () => {
    this.setState({ pagina: this.state.pagina + 1 })
  }

  render () {
    return (
      <Container>
        {this.MostraPagina()}
        <br />
        {this.state.pagina !== 4 && 
        (
          <button onClick={this.proximaPagina}>
            Próxima etapa
          </button>
        )}
      </Container>
    )
  }
}
