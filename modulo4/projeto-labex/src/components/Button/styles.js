import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.width};
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    background: ${props => props.background};
    border: none;
    border-radius: 10px;
    padding: 5px;
    color: ${props => props.color};
    transition: all 0.5s ease;
    &&: hover {
        background: ${props => props.hoverBg};
        color: ${props => props.hoverColor};
    }
`