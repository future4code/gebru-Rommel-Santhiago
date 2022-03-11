import React from 'react'
import axios from 'axios'

const urlApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'

const headers = {
    headers: {
        Authorization: "rommel-santhiago-gebru"
    }
}

export default class AddTrack extends React.Component {
    state = {
        addItem: 'buttonAdd',
        tracks: [],
        inputNameMusic: '',
        inputNameArtist: '',
        inputTrack: []
    }

    handleAddTrack = () => {
        const body = {
          name: this.state.inputNameMusic,
          artist: this.state.inputNameArtist,
          url: this.state.inputTrack
        };
    
        axios.post( `${urlApi}${this.props.playlistID}/tracks`, body,headers )
          .then(() => {
              alert(`Musica ${this.state.inputNameMusic} adicionada com sucesso!`)
              this.setState({ inputNameMusic: '', inputNameArtist: '', inputTrack: '', addItem: 'buttonAdd' })
          })
          .catch(err => {
            alert('Erro ao adicionar musica!')
            console.log(err)
        })
    }

    changeAddTrack = () => {
        this.state.addItem === 'buttonAdd' ? 
        this.setState({ addItem: 'FormAdd' }) : 
        this.setState({ addItem: 'buttonAdd'})
    }

    onChangeInputNameMusic = (e) => {
        this.setState({ inputNameMusic: e.target.value })
    }

    onChangeInputNameArtist = (e) => {
        this.setState({ inputNameArtist: e.target.value })
    }

    onChangeInputTrack = (e) => {
        this.setState({ inputTrack: e.target.value })
    }

    render() { 
        const addTrack =
            this.state.addItem === 'buttonAdd' ? (
                <button onClick={this.changeAddTrack}>Adicionar musica</button>
            ) : (
                <div>
                <input
                    placeholder='Nome da musica'
                    type='text'
                    value={this.state.inputNameMusic}
                    onChange={this.onChangeInputNameMusic}
                />
                <input
                    placeholder='Nome do Artista'
                    type='text'
                    value={this.state.inputNameArtist}
                    onChange={this.onChangeInputNameArtist}
                />
                <input
                    placeholder='Arquivo da musica'
                    type='file'
                    value={this.state.inputTrack}
                    onChange={this.onChangeInputTrack}
                />
                <button onClick={this.handleAddTrack}>Enviar</button>
                </div>
        )
        return (
            <>
               {addTrack}
            </>
        )
    }
} 