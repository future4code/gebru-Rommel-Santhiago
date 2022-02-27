import React from 'react'
import axios from 'axios'
import { Container, Input, Button } from './style'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: 'rommel-santhiago-gebru'
    }
}

export default class UserRegistration extends React.Component {
    state = {
        name: '',
        email: ''
    }

    handleChangeName = e => {
        const newNameValue = e.target.value
        this.setState({ name: newNameValue })
    }

    handleChangeEmail = e => {
        const newEmailValue = e.target.value
        this.setState({ email: newEmailValue})
    }

    handleCreateUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post( url, body, headers )
        .then(() => {
            alert(`Usuário ${this.state.name} criado com sucesso!`);
            this.setState({ name: '', email: '' })
        })
        .catch(err => {
        alert('Erro ao criar o usuário')
        console.log(err);
        })
    }

    enterKeyPress = (eventKey) => {
        if (eventKey.key === "Enter") {
            eventKey.preventDefault();
            return this.handleCreateUser()
        }
    }

    render() {
        return(
            <Container>
                <Input 
                type='text' 
                placeholder='Nome de usuario'
                value={this.state.name}
                onChange={this.handleChangeName}
                onKeyPress={this.enterKeyPress}
                />
                <Input 
                type='email' 
                placeholder='E-mail'
                value={this.state.email}
                onChange={this.handleChangeEmail}
                onKeyPress={this.enterKeyPress}
                />
                <Button onClick={this.handleCreateUser}>Cadastrar</Button>
            </Container>
        )
    }
}