import React from 'react'
import axios from 'axios'

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
            this.setState({ name: "", email: "" })
        })
        .catch(err => {
        alert('Erro ao criar o usuário')
        console.log(err);
        })
    }

    render() {
        return(
            <div>
                <input 
                type='text' 
                placeholder='Nome de usuario'
                value={this.state.name}
                onChange={this.handleChangeName}
                />
                <input 
                type='email' 
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChangeEmail}
                />
                <button onClick={this.handleCreateUser}>Cadastrar</button>
            </div>
        )
    }
}