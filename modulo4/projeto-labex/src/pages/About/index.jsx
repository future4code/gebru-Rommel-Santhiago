import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../routes/coordinator'
import Button from '../../components/Button'

export const About = () => {
  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Styled.Header>
        <Button 
          onClick={() => goToBack(navigate)}
          width={'100px'}
          color={'#CCCCCC'}
          background={'#666666'}
          hoverBg={'#CCCCCC'}
          hoverColor={'#4D4D4D'}
        >
          Home
        </Button>
        <Styled.Title>Projeto Labex</Styled.Title>
      </Styled.Header>
      <Styled.Content>
        <Styled.Text>
          Esse é um projeto de gerenciamento de viagens desenvolvido com <Styled.Span>React JS</Styled.Span>
        </Styled.Text>
        <Styled.Text>
          Utilizamos o <Styled.Span>cliente HTTP axios</Styled.Span> para fazer a conexão com a 
          <Styled.Span> API LabeX</Styled.Span> da <Styled.Span>Labenu</Styled.Span>
        </Styled.Text>
        <Styled.Text>
          O <Styled.Span>Styled Componet</Styled.Span> para a estilização das paginas e em alguns casos a biblioteca 
          <Styled.Span> React UI</Styled.Span> para pegar icones
        </Styled.Text>
        <Styled.Text>
          O <Styled.Span>react-reouter-dom</Styled.Span> para criar as rotas para as paginas e os links para os botões de acesso
        </Styled.Text>
        <Styled.Text>
          Também utilizamos <Styled.Span>Hooks</Styled.Span> para gerenciar os estados dos components, 
          requisições e até mesmo estilização, como o <Styled.Span>useState()</Styled.Span>, 
          <Styled.Span> useEffect()</Styled.Span> e <Styled.Span>customHooks()</Styled.Span>
        </Styled.Text>
        <Styled.Text>Desenvolvido com <Styled.Span>&#x10e6;</Styled.Span> por <Styled.Span>Rommel</Styled.Span>, 
        <Styled.Span> Turma:</Styled.Span> Gebru - <Styled.Span>Labenu</Styled.Span></Styled.Text>
      </Styled.Content>
    </Styled.Container>
  )
}