import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 400px;
    height: 90%;
    display: flex;
    justify-content: center;
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
    padding-bottom: ${props => props.paddingBottom};
    background: none;
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;

    :hover {
      background-color: ${props => props.backgroundHover};
      color: ${props => props.colorHover}
    }
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