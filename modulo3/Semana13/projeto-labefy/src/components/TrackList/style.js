import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Audio = styled.audio`
    &:-webkit-media-controls-play-button {
        background: black
    }
`