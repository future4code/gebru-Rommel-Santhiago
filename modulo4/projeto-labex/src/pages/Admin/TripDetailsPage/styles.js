import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    max-width: 600px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 50px 0;
`

export const Title = styled.h1`
    font-size: 2em;
    margin: 20px 0 0 0;
    color: whitesmoke;
    text-shadow: 
               -2px -2px 0px #4D4D4D, 
               -2px 2px 0px #4D4D4D,      
                2px -1px 0px #4D4D4D,    
                2px 0px 0px #4D4D4D;
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 1em;
`

export const ContentCandidate = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px 0;
`

export const Form = styled.form`
    width: 400px;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`