import React from 'react'
import axios from 'axios'
import { Container, Title, Description, Button } from './style'

export default class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegaPlaylists()
    }

    pegaPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
          headers: {
            Authorization: "rommel-santhiago-gebru"
          }
        }).then((res) => {
          this.setState({ playlists: res.data.result.list })
        }).catch((err) => {
          console.log("Erro >", err.message)
        })
    }


    render() {
        const renderPlaylists = this.state.playlists.map((playlist) => {
            return <Description key={playlist.id}>
                {playlist.name}
                <Button onClick={() => this.removePlaylist(playlist.id)}>X</Button>
              </Description>
        })

        return (
            <Container>
                <Title>Playlist</Title>
                {renderPlaylists}
            </Container>
        )
    }
}