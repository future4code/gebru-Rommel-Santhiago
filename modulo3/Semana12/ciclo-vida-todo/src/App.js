import React from 'react'
import styled from 'styled-components'
// import TarefasCompletas from './components/TarefasCompletas'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ContentTarefa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  }

  componentDidMount(prevProps, prevState) {
    const tarefaLS = localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem ('tarefas')) : [
      {
        id: 1,
        texto: 'Pedalar',
        completa: false
      },
      {
        id: 2,
        texto: 'Almoçar',
        completa: true
      }
    ]
    this.setState({tarefas: tarefaLS}) 
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
          id: Date.now(),
          texto: this.state.inputValue,
          completa: false
        }

    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: novaListaDeTarefas})
    localStorage.setItem('tarefas', JSON.stringify(novaListaDeTarefas))
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const marcaTarefa = {
          ...tarefa, 
          completa: !tarefa.completa
        }
        return marcaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  removeTarefa = (idToRemove) => {
    const tarefasAtuais = [...this.state.tarefas]

    const novaListaDeTarefas = tarefasAtuais.filter((tarefa) => {
      return tarefa.id !== idToRemove
    })
    this.setState({tarefas: novaListaDeTarefas})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
       switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa;
        default:
          return true;
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        {/* <TarefasCompletas /> */}
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <ContentTarefa key={tarefa.id}>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                  
                </Tarefa>
                <button onClick={() => this.removeTarefa(tarefa.id)}>remover</button>
              </ContentTarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
