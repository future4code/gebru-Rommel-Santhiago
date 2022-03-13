import React from 'react'

export class Play extends React.Component{
    constructor() {
        super();
        this.state = {
            isPlaying: false
        }
    }

    onPlay = () => {
        let audio = new Audio(this.props.urlTrack)
        audio.play()
        this.setState({ isPlaying: true })
    }

    onPause = () => {
        let audio = new Audio(this.props.urlTrack)
        audio.pause()
        this.setState({ isPlaying: false })
    }

    render() {

        return (
            <>
                <button 
                onClick={this.state.isPlaying ? this.onPause : this.onPlay} >
                    {this.state.isPlaying ? 'Pause' : 'Play'}
                </button> 
            </>
        )
    }
}