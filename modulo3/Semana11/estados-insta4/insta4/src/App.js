import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 1em;
  padding: 0.5em;
  margin: 0.5em 0;
`

const TooltipText = styled.div`
  margin: 5px 0;
  text-align: center;
  cursor: pointer;
`
const TooltipBox = styled.div`
  position: absolute;
  top: 0;
  left: 190px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 0 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
  padding 0.5s ease-in-out;
    &:before {
      content: "";
      width: 0;
      height: 0;
      left: -10px;
      top: 6px;
      position: absolute;
      border: 10px solid transparent;
      transform: rotate(45deg);
      transition: border 0.3s ease-in-out;
    }
`
const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 150px;
    padding: 0 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
      rgba(0, 0, 0, 0.8);
    }
  }
`

const Buttom = styled.button`
  margin-left: 50px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        nomeUsuario: "Misy",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/200/150?a=1"
      },
      {
        id: 2,
        nomeUsuario: "Debora",
        fotoUsuario: "https://picsum.photos/50/50?a=2",
        fotoPost: "https://picsum.photos/200/150?a=2"
      },
      {
        id: 3,
        nomeUsuario: "Marlon",
        fotoUsuario: "https://picsum.photos/50/50?a=3",
        fotoPost: "https://picsum.photos/200/150?a=3"
      }
    ],
    valorInputNomeDeUsuario: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: ''
  }

  addPost = () => {
    const novoPost = {
      id: Math.random(),
      nomeUsuario: this.state.valorInputNomeDeUsuario,
      fotoUsuario: `https://picsum.photos/50/50?a= + ${this.state.valorInputFotoUsuario}`,
      fotoPost: `https://picsum.photos/200/150?a= + ${this.state.valorInputFotoPost}` 
    }

    const novosPosts = [...this.state.posts, novoPost]

    this.setState({ posts: novosPosts })

    this.setState({
      valorInputNomeDeUsuario: '',
      valorInputFotoUsuario: '',
      valorInputFotoPost: ''
    })
  }

  onChangeInputNomeDeUsuario = (event) => {
    this.setState({ valorInputNomeDeUsuario: event.target.value })
  } 

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  } 

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  } 

  mostraMsg = () => {
    alert("Digite qualquer coisa")
  }

  render() {
    const listaPosts = this.state.posts.map((post) => {
      return <Post key={post.id} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/>
    })

    return (
      <MainContainer>
        <FormContainer>
          <div>
            <input
              value={this.state.valorInputNomeDeUsuario}
              onChange={this.onChangeInputNomeDeUsuario}
              placeholder={"Nome de usuário"}
            />
            <TooltipCard>
              <TooltipText>
                <input
                  value={this.state.valorInputFotoUsuario}
                  onChange={this.onChangeInputFotoUsuario}
                  placeholder={"Foto do usuário"}
                />
              </TooltipText>
              <TooltipBox>
                <p>Digite qualquer coisa</p>
              </TooltipBox>
            </TooltipCard>
            
            <TooltipCard>
              <TooltipText>
                <input
                  value={this.state.valorInputFotoPost}
                  onChange={this.onChangeInputFotoPost}
                  placeholder={"Foto do post"}
                />
              </TooltipText>
              <TooltipBox>
                <p>Digite qualquer coisa</p>
              </TooltipBox>
            </TooltipCard>
            
          </div>
          <Buttom onClick={this.addPost}>Adicionar</Buttom>
        </FormContainer>
        {listaPosts}
      </MainContainer>
    );
  }
}

export default App;
