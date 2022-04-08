import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
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
`

export const Buttons = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: 20px;
`

export const Title = styled.h1`
    font-size: 2em;
    margin: 10px 0;
    color: whitesmoke;
    text-shadow: 
               -2px -2px 0px #4D4D4D, 
               -2px 2px 0px #4D4D4D,      
                2px -1px 0px #4D4D4D,    
                2px 0px 0px #4D4D4D;
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 1.3em;
    color: #CCCCCC;
    margin: 10px 0;
`