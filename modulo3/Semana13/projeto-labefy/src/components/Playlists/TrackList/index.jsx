import React from 'react'
import axios from 'axios'

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
            tracks: [{
                name: '',
                artist: '',
                url: ''
            }]
        }
    }

    getPlaylistTracks = async () => {
        try {
          const res = await axios.get(`${url}/${this.props.playlistID}/tracks`, headers)
          this.setState({ tracks: res.data.result })
          console.log(res)
        } catch (err) {
          console.log(err.response)
        }
    }

    render() {
        const trackLists = this.state.tracks.map((track) => {
            return <p key={track.id}>{track.name}</p>
        })
        return (
            <>
                {trackLists}
            </>
        )
    }
}