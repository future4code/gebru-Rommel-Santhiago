import React from 'react'
import axios from 'axios'

import { Container } from './style'
import { Play } from '../Controls'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = {
  headers: {
  Authorization: 'rommel-santhiago-gebru',
  },
}

export default class TrackList extends React.Component {
    constructor() {
        super();
        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    getPlaylistTracks = async () => {
        try {
          const res = await axios.get(`${url}/${this.props.playlistID}/tracks`, headers)
          this.setState({ tracks: res.data.result.tracks })
          console.log(this.props.playlistName)
          console.log(this.props.playlistID)
          console.log(res.data.result.tracks.length)
        } catch (err) {
          console.log(err.response)
        }
    }

    render() {
        const trackLists = this.state.tracks.map((track) => {
            return <Container key={track.id}>
                <p>Musica: {track.name}</p>
                <p>Artista: {track.artist}</p>
                <Play urlTrack={track.url}/>
            </Container> 
        })
        return (
            <>
                {trackLists}
            </>
        )
    }
}