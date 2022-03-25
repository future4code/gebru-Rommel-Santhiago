import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 400px;
    height: 90%;
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export const Buttons = styled.div`
    height: 10%;
    width: 400px;
    display: flex;
    position: fixed;
    bottom: 40px;
    justify-content: space-around;
    align-items: center;
`

export const Button = styled.button`
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
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