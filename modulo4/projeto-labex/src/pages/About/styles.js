import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    padding: 0 20%;
`

export const Header = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 20px;
`

export const Title = styled.h1`
    font-size: 2.5em;
    color: whitesmoke;
    text-shadow: 
               -2px -2px 0px #4D4D4D, 
               -2px 2px 0px #4D4D4D,      
                2px -1px 0px #4D4D4D,    
                2px 0px 0px #4D4D4D;
`

export const Text = styled.p`
    color: #4D4D4D;
    font-size: 1.5em;
    margin: 20px 0;
`

export const Span = styled.span`
    font-weight: bold;
`