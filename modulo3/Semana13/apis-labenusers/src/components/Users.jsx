import React from 'react'
import axios from 'axios'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "rommel-santhiago-gebru"
    }
}

export default class Users extends React.Component {
    state = {
        usersList: []
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

    render() {
        return(
            <div>
                <ul>
                    {this.state.usersList.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })}
                </ul>
                <div>
                    <input type='text' placeholder='Nome exato para buscar'/>
                    <button>Buscar</button>
                </div>
            </div>
        )
    }
}