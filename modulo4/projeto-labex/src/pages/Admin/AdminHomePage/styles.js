import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
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