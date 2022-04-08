import {useNavigate} from 'react-router-dom'

import * as Styled from './styles'
import { goToBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../Hooks/useProtectedPage'
import Button from '../../../components/Button'
import { planets } from '../../../constants/planets'

export const CreateTrip = () => {
  const navigate = useNavigate()
  useProtectedPage()

  return (
    <Styled.Container>
      <Styled.Title>Criar viagem</Styled.Title>
      <Button 
        onClick={() => goToBack(navigate)}
        width={'100px'}
        color={'#CCCCCC'}
        background={'#666666'}
        hoverBg={'#CCCCCC'}
        hoverColor={'#4D4D4D'}
      >
        Voltar
      </Button>
      
    </Styled.Container>
  )
}