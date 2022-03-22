import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    width: 100%;
    height: 75%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const ContentText = styled.div`
    color: whitesmoke;
    text-shadow: -2px 2px 0 black;
    font-weight: bold;
`

export const Title = styled.h3`
    margin: -5em 0.5em 0 0.5em;
`

export const Bio = styled.p`
    margin: 0.5em 1em;
`

export const Buttons = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Button = styled.button`
    height: 50%;
    width: 10%;
    font-size: 2em;
    color: ${props => props.color};
    background: none;
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;
`

export const swipeRight = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(-200px) rotate(-20deg);
  }
`

export const swipeLeft = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(200px) rotate(20deg);
  }
`