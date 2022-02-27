import React from 'react';
import axios from 'axios'

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
      <div>
        <input
          placeholder='Nome da playlist'
          value={this.state.playlistValue}
          onChange={this.onChangePlaylistValue}
        />
        <button onClick={this.criarPlaylist}>Criar playlist</button>
      </div>
    )
  }
}
