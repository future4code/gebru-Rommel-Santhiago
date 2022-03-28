import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
`

export const ButtonClear = styled.button`
    width: 150px;
    height: 20px;
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 15px;
`

export const Button = styled.button`
    width: 60px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    position: absolute;
    top: 20px;
    right: 40px;
    background-color: transparent;
    border: 1px solid ${props => props.borderColor};
    border-radius: 3px;
`

export const Img = styled.img`
    width: 25px;
    height: 25px;
    background-color: whitesmoke;
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;
`