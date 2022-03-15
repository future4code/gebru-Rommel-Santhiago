import React from 'react'
import Post from '../components/Post/Post'
import { AppContainer, Title, SubTitle } from './style'

export default function App() {
  return (
    <AppContainer>
      <Title>Projeto InstaLab</Title>
      <SubTitle>Desenvolvido com Hooks e styled-components</SubTitle>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </AppContainer>
  )
}