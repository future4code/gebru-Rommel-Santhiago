import styled, { keyframes } from 'styled-components'

const slideRigth = keyframes`
  0% { opacity: 0; transform: translateX(-100%); }   
  100% { opacity: 1; transform: translateX(0); }
`

export const Container = styled.div`
  display: ${props => props.display};
  width: 200px;
  max-height: 520px;
  opacity: ${props => props.opacity};
  overflow-y: auto;
  border-left: 1px solid lightgray;
  animation: ${slideRigth} .3s ease-out;
`