import styled from 'styled-components'
import { ButtonMain } from '../Button'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
`

export const Input = styled.input`
    margin: 1em 0;
    border: 2px solid #33ff00;
    border-radius: 5px;
    padding: 8px 5px;
`

export const Button = styled(ButtonMain)`
    &: hover {
        background-color: whitesmoke;
        color: black;
    }
`