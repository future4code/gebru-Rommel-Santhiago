import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    heighr: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #CCCCCC;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

export const Buttons = styled.div`
    display: flex;
    margin: 20px;
`
export const Button = styled.button`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: 10px;
    padding: 10px;
    background: #4D4D4D;
    border: none;
    border-radius: 10px;
    color: #CCCCCC;
    &&: hover {
        background: whitesmoke;
        color: #4D4D4D;
    }
`

export const Title = styled.h1`
    color: #4D4D4D;
`

export const Card = styled.div`
    width: 40%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    box-shadow: black 0 0 8px 4px;
    background: #4D4D4D;
    color: whitesmoke;
    margin: 20px 0;
    padding: 20px;
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 1.3em;
    color: #CCCCCC;
    margin: 10px 0;
`