import React from 'react'
import UserRegistration from './components/UserRegistration'
import Users from './components/Users'

export default class App extends React.Component {
  state = {
    currentPage: 'userRegistration',
    buttonName: 'HOME'
  }

  changePage = () => {
    this.state.currentPage === 'userRegistration' ? 
    this.setState({ currentPage: 'users'}) : 
    this.setState({ currentPage: 'userRegistration'})
  }

  render () {
    // const button = this.state.buttonName === 'home' ?
    // this.setState({ buttonName: 'usuário' }) :
    // this.setState({ buttonName: 'home'})

    return(
      <div>
        <h1>Projeto Labenusers</h1>
        <button onClick={this.changePage}>HOME</button>
        {this.state.currentPage === 'userRegistration' ? <UserRegistration /> : <Users />}
      </div>
    )
  }
}