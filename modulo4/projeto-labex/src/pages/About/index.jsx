import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../routes/coordinator'
import Button from '../../components/Button'

export const About = () => {
  const navigate = useNavigate()

  return (
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
  )
}