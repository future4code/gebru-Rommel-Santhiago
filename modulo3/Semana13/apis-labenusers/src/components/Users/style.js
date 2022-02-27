import styled from 'styled-components'
import { ButtonMain } from '../Button'

export const Content = styled.div`
    width: 50%;
`

export const Ul = styled.ul`
    padding-left: 0;
    color: #33ff00;
`

export const Li = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 5px;
`

export const Button = styled(ButtonMain)`
    margin: 0 5px;
    &: first-child {
        &: hover {
            background-color: blue;
            color: white;
        }
    }
    &: last-child {
        color: red;
        &: hover {
            background-color: red;
            color: white;
        }
    }
`

export const Title = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
`

export const Search = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Input = styled.input`
    margin: 1em 0;
    border: 2px solid #33ff00;
    border-radius: 5px;
    padding: 8px 5px;
`

export const ButtonSearch = styled(ButtonMain)`
    font-size: 1.2em;
    &: hover {
        background-color: whitesmoke;
        color: black;
    }
`