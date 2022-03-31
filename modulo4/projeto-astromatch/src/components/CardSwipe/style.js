import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${props => props.animation} 0.5s forwards;
`

export const Img = styled.img`
  width: 90%;
  height: ${props => props.height};
  border-radius: 10px;
  box-shadow: #979797 -5px 5px 10px 0px;
`

export const ContentText = styled.div`
    color: whitesmoke;
    text-shadow: -2px 2px 0 black;
    font-weight: bold;
    padding: 0 20px;
`

export const Title = styled.h3`
    margin: -5em 0.5em 0 0.5em;
`

export const Bio = styled.p`
    margin: 0.5em 1em;
`