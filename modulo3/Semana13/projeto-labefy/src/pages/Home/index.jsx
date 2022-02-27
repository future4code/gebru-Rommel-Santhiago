import React from 'react'
import Menu from '../../components/Menu'
import Playlists from '../../components/Playlists'
import Player from '../../components/Player'
import { Container } from './style'

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Menu />
                <Playlists />
                <Player />
            </Container>
        )
    }
}