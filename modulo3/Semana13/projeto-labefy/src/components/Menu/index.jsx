import React from 'react'
import { Container, Title, Button } from './style'

export default class Menu extends React.Component {
    render() {
        return (
            <Container>
                <Title>Library</Title>
                <Button>Playlists</Button>
                <Button>Cria Playlist</Button>
            </Container>
        )
    }
}