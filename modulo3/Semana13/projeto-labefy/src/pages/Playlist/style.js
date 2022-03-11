import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 1fr 1fr; 
    grid-template-rows: 3.21fr 3.2fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "Library Playlist Playlist"
    "Library Playlist Playlist"
    "Music Music Music";
`

export const Library = styled.aside`
    grid-area: Library;
    color: whitesmoke;
    background-color: #566573;
`

export const Content = styled.section`
    grid-area: Playlist;
    background-color: #1C2833;
`

export const Music = styled.div`
    height: 12vh;
    grid-area: Music;
    border-top: solid 3px #DE3163;
    background-color: #566573;
`