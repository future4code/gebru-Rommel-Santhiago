import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid #000000cc;
    padding: 0 10px;
    background-color: ${props => props.backgroundColor};
`

export const Button = styled.button`
    background: none;
    border: none;
`
export const Img = styled.img`
    width: ${props => props.width};
    heght: ${props => props.width};
    margin-left: ${props => props.marginLeft};
`