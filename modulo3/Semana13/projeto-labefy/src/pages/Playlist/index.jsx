import React from 'react'
import Menu from '../../components/Menu'
import CreatePlaylist from '../../components/CreatePlaylist'
import Player from '../../components/Player'
import { Container } from './style'

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Menu />
                <CreatePlaylist />
                <Player />
            </Container>
        )
    }
}