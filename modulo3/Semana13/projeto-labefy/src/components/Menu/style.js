import styled from 'styled-components'
import {Library} from '../../pages/Home/style'

export const Container = styled(Library)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-weight: bold;
`

export const Button = styled.button`
    color: whitesmoke;
    font-weight: bold;
    font-size: 1em;
    margin-top: 1em;
    background-color: transparent;
    border: none;
    &: hover {
        color: #DE3163;
    }
`