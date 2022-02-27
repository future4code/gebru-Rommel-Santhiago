import React from 'react'
import axios from 'axios'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: "rommel-santhiago-gebru"
    }
}

export default class UserEdit extends React.Component {
    state = {
        userItem: {},
        userEdit: 'editButton',
        name: '',
        email: ''
    }

    componentDidMount() {
        this.getUserItem()
    }

    getUserItem = () => {
        axios.get(`${url}/${this.props.userId}`, headers)
        .then((res) => {
            this.setState({ userItem: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    changeUserEdit = () => {
        this.state.userEdit === 'editButton' ? 
        this.setState({ userEdit: 'FormUserEdit' }) : 
        this.setState({ userEdit: 'editButton'})
    }

    handleNameChange = e => {
        const newNameValue = e.target.value;
        this.setState({ name: newNameValue });
    }

    handleEmailChange = e => {
        const newEmailValue = e.target.value;
        this.setState({ email: newEmailValue });
    }

    handleEditUser = () => {
        const body = {
          name: this.state.name,
          email: this.state.email
        };
    
        axios.put( `${url}/${this.props.userId}`,body,headers )
          .then(() => {
            this.setState({ name: '', email: '' })
            this.getUserItem()
            this.changeUserEdit()
            alert(`Usuário ${this.state.name} editado com sucesso!`)
          })
          .catch(err => {
            alert('Erro ao editar usuário')
            console.log(err)
        })
    }

    render() {
        const editionUser =
            this.state.userEdit === 'editButton' ? (
                <button onClick={this.changeUserEdit}>Editar usuário</button>
            ) : (
                <div>
                <input
                    placeholder='Nome'
                    type='text'
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    placeholder='E-mail'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button onClick={this.handleEditUser}>Salvar edição</button>
                </div>
        )

        return (
            <div>
                <h1>Edição de usuário</h1>
                <div>
                    <p>{this.state.userItem.name}</p>
                    <p>{this.state.userItem.email}</p>
                </div>
                <div>{editionUser}</div>
                <hr />
                <button onClick={this.props.changePage}>
                    Voltar para lista de usuários
                </button>
            </div>
        )
    }
}