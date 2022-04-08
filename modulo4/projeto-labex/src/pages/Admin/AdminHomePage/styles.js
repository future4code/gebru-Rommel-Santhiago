import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`

export const Title = styled.h1`
    font-size: 2em;
    margin: 10px 0 50px 0;
    color: whitesmoke;
    text-shadow: 
               -2px -2px 0px #4D4D4D, 
               -2px 2px 0px #4D4D4D,      
                2px -1px 0px #4D4D4D,    
                2px 0px 0px #4D4D4D;
`

export const Trips = styled.div`
    height: 50px;
    width: 500px;
    display: flex;
    align-items: center;
    margin: 20px 0;
    background: #666666;
    border-radius: 8px;
    box-shadow: black 3px 5px 8px 0;
    &&: hover {
        background: whitesmoke;
    }
`

export const Button = styled.button`
    width: 90%;
    background: transparent;
    border: none;
    padding: 15px;
    text-align: left;
    font-weight: bold;
    color: #CCCCCC;
    &&: hover {
        color: #4D4D4D;
    }
`

export const Buttons = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
`

export const DeleteButton = styled(DeleteIcon)`
    padding: 10px;
    color: slategray;
    &:hover{
        cursor: pointer;
        background-color: #d1e4ed;
        border-radius: 24px;
        color: darkred;
    }
`