import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../routes/coordinator'

export const ApplicationForm = () => {
  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Styled.Title>Inscreva-se para uma viagem</Styled.Title>
      <Styled.Form>
        <Styled.Select>
          <option value='default' selected>Escolha uma Viagem</option>
        </Styled.Select>
        <Styled.Input type="text" placeholder="Nome"/>
        <Styled.Input type="number" placeholder="Idade"/>
        <Styled.Input type="text" placeholder="Texto de candidatura"/>
        <Styled.Input type="text" placeholder="Profissão"/>
        <Styled.Select>
          <option value='default' selected>Escolha um Pais</option>
        </Styled.Select>
      </Styled.Form>
      <Styled.Buttons>
        <Styled.Button onClick={() => goToBack(navigate)}>Voltar</Styled.Button>
        <Styled.Button>Enviar</Styled.Button> 
      </Styled.Buttons>
    </Styled.Container>
  )
}
