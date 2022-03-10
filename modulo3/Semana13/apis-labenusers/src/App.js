import React from 'react'
import UserRegistration from './components/UserRegistration'
import Users from './components/Users'
import { Container, Content, Title, Button } from './style'

export default class App extends React.Component {
  state = {
    currentPage: 'userRegistration',
    currentButton: 'home'
  }

  changePage = () => {
    this.state.currentPage === 'userRegistration' ? 
    this.setState({ currentPage: 'users'}) : 
    this.setState({ currentPage: 'userRegistration'})
  }

  render () {
    return(
      <Container>
          <Title>Projeto API-Labenusers</Title>
        <Content>
          {this.state.currentPage === 'userRegistration' ? <Button onClick={this.changePage}>Lista de usuários</Button> : 
          <Button onClick={this.changePage}>Home</Button>}
          {this.state.currentPage === 'userRegistration' ? <UserRegistration /> : <Users />}
        </Content>
      </Container>
    )
  }
}