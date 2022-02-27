import styled from 'styled-components'
import { ButtonMain } from '../Button'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled(ButtonMain)`
    &: hover {
        background-color: whitesmoke;
        color: black;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    margin: 0.5em 0;
    border: 2px solid #33ff00;
    border-radius: 5px;
    padding: 3px 2px;
`

export const Hr = styled.hr`
    width: 100%;
`