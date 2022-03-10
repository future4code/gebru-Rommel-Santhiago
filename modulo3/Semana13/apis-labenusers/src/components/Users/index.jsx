import React from 'react'
import axios from 'axios'
import UserEdit from '../UserEdit'
import { Content, Ul, Li, Button, Title, Search, Input, ButtonSearch } from './style'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: "rommel-santhiago-gebru"
    }
}

export default class Users extends React.Component {
    state = {
        usersList: [],
        currentPage: 'users',
        userId: '',
        name: ''
    }

    componentDidMount() {
        this.getUsersList()
    }

    getUsersList = () => {
        axios.get(url, headers)
        .then(res => {
            this.setState({ usersList: res.data })
        })
    }

    handleUserDelet = userId => {
        if (window.confirm('Tem certeza que deseja apagar o usuário?')) {
            axios.delete( `${url}/${userId}`, headers )
            .then(() => {
              alert('Usuário apagado com sucesso!')
              this.getUsersList()
            })
            .catch(() => {
              alert('Erro ao apagar usuário')
            })
        }
    }

    handleNameChange = e => {
        const newNameValue = e.target.value
        this.setState({ name: newNameValue })
    }

    handleSearchUser = () => {
        axios.get( `${url}/search?name=${this.state.name}&email=`, headers )
          .then(res => {
            this.setState({ usersList: res.data })
          })
          .catch(err => {
            alert('Usuário não existe!')
            console.log(err)
        })
    }

    changePage = userId => {
        this.state.currentPage === 'users' ? 
        this.setState({ currentPage: 'userEdit', userId: userId }) : 
        this.setState({ currentPage: 'users', userId})
    }

    enterKeyPress = (eventKey) => {
        if (eventKey.key === "Enter") {
            eventKey.preventDefault();
            return this.handleSearchUser()
        }
    }

    render() {
        return(
            <Content>
                {this.state.currentPage === 'users' ? (
                    <div>
                        <Ul>
                            {this.state.usersList.map(user => {
                                return <Li key={user.id}>
                                        {user.name}
                                        <span>
                                            <Button onClick={() => this.changePage(user.id)}>Editar</Button>
                                            <Button onClick={() => this.handleUserDelet(user.id)}>Deletar</Button>
                                        </span>
                                    </Li>
                            })}
                        </Ul>
                        <hr />
                        <Title>Procurar usuário</Title>
                        <Search>
                            <Input 
                                type='text' 
                                placeholder='Nome exato para buscar'
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                onKeyPress={this.enterKeyPress}
                            />
                            <ButtonSearch onClick={this.handleSearchUser}>Buscar</ButtonSearch>
                        </Search>
                    </div>
                ) : (
                    <UserEdit userId={this.state.userId} changePage={this.changePage} />
                )}
            </Content>
        )
    }
}