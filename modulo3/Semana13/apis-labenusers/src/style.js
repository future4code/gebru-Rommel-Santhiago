import styled from 'styled-components'
import { ButtonMain } from './components/Button'

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #33ff00;
    background-color: black;
`

export const Content = styled.div`
    width: 60vw;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid #33ff00;
    border-radius: 5px;
    padding: 0.5em 0 1em;
`

export const Title = styled.h1`
    font-size: 3em;
    margin-top: 0;
`

export const Button = styled(ButtonMain)`
    font-size: 1.5em;
    margin: 1em 0;
        &: hover {
            background-color: whitesmoke;
            color: black;
        }
`