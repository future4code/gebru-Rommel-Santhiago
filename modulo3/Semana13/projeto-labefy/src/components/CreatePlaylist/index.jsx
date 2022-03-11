import React from 'react';
import axios from 'axios'
import { Container, Input, Title  } from './style'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = {
    headers: {
    Authorization: 'rommel-santhiago-gebru',
    },
}

export default class CreatePlaylist extends React.Component {
    state = {
        playlistValue: ''
    }

    newPlaylist = () => {
        const body = {
            name: this.state.playlistValue,
        }

        axios.post(url, body, headers)
            .then((res) => {
            console.log(res.data)
            })
            .catch((err) => {
            console.log(err.message)
            })
        alert(`Playlist ${this.state.playlistValue} criada com sucesso!`)
        this.setState({ playlistValue: '' })
        this.pegaPlaylists()
    }

    criarPlaylist = () => {
        if (this.state.playlistValue.length > 0) {
            this.newPlaylist()
        } else {
            alert('Dê um nome a playlist');
        }
    }

    onChangePlaylistValue = (e) => {
        this.setState({ playlistValue: e.target.value })
    }

  render() {
    return (
      <Container>
        <Title>Criar playlist</Title>
        <Input
          placeholder='Nome da playlist'
          value={this.state.playlistValue}
          onChange={this.onChangePlaylistValue}
        />
        <button onClick={this.criarPlaylist}>Criar</button>
      </Container>
    )
  }
}
