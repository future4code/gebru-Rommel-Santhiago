import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Title, Button } from './style'

export default class Menu extends React.Component {
    render() {
        return (
            <Container>
                <Title>Library</Title>
                <Link to='/'>
                    <Button>Playlists</Button>
                </Link>
                <Link to='criar-playlist'>
                    <Button>Cria Playlist</Button>
                </Link>
            </Container>
        )
    }
}