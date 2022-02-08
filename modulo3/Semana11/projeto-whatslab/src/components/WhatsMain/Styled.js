import styled from 'styled-components'

export const MessageContainer = styled.div`
    width: 40vw;
    height: 100vh;
    background-color: #ECE5DD;

    @media (max-width: 540px){
      width: 100vw;
    }
`

export const ContentMessages = styled.div`
  height: 85vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1em;
  overflow-y: auto;
`

export const ContentMessage =styled.h4`
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 0 0.5em;
    font-weight: normal;

    @media (max-width: 540px){
      width: 75vw;
    }
`

export const ContentMessageUser =styled.h4`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 5em;
    padding: 0 0.5em;
    font-weight: normal;

    @media (max-width: 540px){
      margin-left: 2em;
    }
`

export const FormMessage = styled.div`
  width: 35vw;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding: 1em 1.5em;

  @media (max-width: 540px){
    width: 90vw;
  }
`

export const UserInput = styled.input`
  width: 10vw;
  margin-right: 3px;
  border: none;
  border-radius: 0.3em;
  padding: 1em 0.5em;
`

export const TextInput = styled.input`
  max-width: 30vw;
  flex: 1;
  margin-right: 3px;
  border: none;
  border-radius: 0.3em;
  padding: 1em 0.5em;

  @media (max-width: 540px){
    max-width: 60vw;
  }
`
export const ButtonForm = styled.button`
    border: none;
    border-radius: 0.3em;
    padding: 1em 0.5em;
    background-color: #97A593;
    font-weight: bold;
`
export const NameUser = styled.span`
  font-weight: bold;
  margin: 0.3em 1.2em;
`

export const Mensagem = styled.div`
    display: flex;
    word-break: break-word;
    margin: 0;
    padding: 0.3em 0 0.5em 0;
    border-radius: 1.5em;
    background-color: #DDF7C8;
    &:before {
      z-index: 0;
      content: '';
      border: 15px solid transparent;
      border-top-color: #DDF7C8;
      margin: -5px;
      position: relative;
      top: 0;
      left: -2px
`

export const MensagemUser = styled.div`
    display: flex;
    word-break: break-word;
    margin: 0;
    padding: 0.3em 1em 0.5em 1em;
    border-radius: 1.5em;
    background-color: #DDF7C8;
    &:after {
      z-index: 0;
      content: '';
      border: 15px solid transparent;
      border-top-color: #DDF7C8;
      margin: -25px;
      position: relative;
      top: 20px;
      right: 2px;
`

export const P = styled.p`
      z-index: 9;
      display: flex;
      margin: 5px 0 0 0;
`

export const ButtonDelete = styled.button`
    display: flex;
    justify-content: flex-end;
    border: none;
    background-color: transparent;
    sup {
      padding: 0.5em;
      font-size: 0.7em;
    }
`

export const Doublecheck = styled.img`
  position: relative;
  height: 0.5em;
  left: 25px;
  align-self: flex-end;
`

export const TooltipText = styled.div`
  margin: 0 5px;
  text-align: center;
  cursor: pointer;
`

export const TooltipBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: -70px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 100px;
  padding: 0 1px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
  padding 0.5s ease-in-out;
    &:before {
      content: "";
      width: 0;
      height: 0;
      left: 85px;
      top: 29px;
      position: absolute;
      border: 5px solid transparent;
      transform: rotate(315deg);
      transition: border 0.3s ease-in-out;
    }
`
export const TextBallon = styled.p`
    font-size: 10px;
`

export const TooltipCard = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15px;
  bottom: 10px;
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100px;
    padding: 0 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
      rgba(0, 0, 0, 0.8);
    }
  }
`