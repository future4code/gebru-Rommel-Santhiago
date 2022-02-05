import styled from 'styled-components'

export const MessageContainer = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: #ECE5DD;
`

export const ContentMessages = styled.div`
  height: 80vh;
  overflow-y: auto;
`

export const ContentMessage =styled.h4`
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 0 0.5em;
    font-weight: normal;
`

export const ContentMessageUser =styled.h4`
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1em 0 1em 4em;
    padding: 0 0.5em;
    font-weight: normal;
`

export const FormMessage = styled.div`
  width: 55vw;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding: 1em 1.5em;
`

export const UserInput = styled.input`
  width: 10vw;
  margin-right: 3px;
  border: none;
  border-radius: 0.3em;
  padding: 1em 0.5em;
`

export const TextInput = styled.input`
  max-width: 40vw;
  flex: 1;
  margin-right: 3px;
  border: none;
  border-radius: 0.3em;
  padding: 1em 0.5em;
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

export const Mensagem = styled.p`
    display: flex;
    word-break: break-word;
    margin: 0;
    padding: 0.3em 1em 0.5em 1em;
    border-radius: 1.5em;
    background-color: #DCF8C6;
`
export const ButtonDelete = styled.button`
    display: flex;
    justify-content: flex-end;
    border: none;
    background-color: transparent;
    font-weight: bold;
`