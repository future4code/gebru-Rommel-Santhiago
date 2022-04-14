import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: ${props => props.textAlign};
    border-radius: 5px;
    box-shadow: black 0 0 8px 4px;
    background: #4D4D4D;
    color: whitesmoke;
    margin: 20px 0;
    padding: 20px;
`