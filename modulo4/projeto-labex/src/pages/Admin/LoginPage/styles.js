import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Buttons = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const Form = styled.form`
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`

export const Title = styled.h1`
    font-size: 2em;
    margin-top: 50px;
    color: whitesmoke;
    text-shadow: 
               -2px -2px 0px #4D4D4D, 
               -2px 2px 0px #4D4D4D,      
                2px -1px 0px #4D4D4D,    
                2px 0px 0px #4D4D4D;
`