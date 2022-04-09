import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 2em;
    margin: 30px 0 20px 0;
    color: whitesmoke;
    text-shadow: 
               -2px -2px 0px #4D4D4D, 
               -2px 2px 0px #4D4D4D,      
                2px -1px 0px #4D4D4D,    
                2px 0px 0px #4D4D4D;
`

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Select = styled.select`
    min-width: 400px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 0px 0px 15px;
`

export const Input = styled.input`
    width: 380px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 0px 0px 15px;
`

export const Buttons = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`