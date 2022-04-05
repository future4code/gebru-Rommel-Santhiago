import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../routes/coordinator'

export const About = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => goToBack(navigate)}>Home</button>
  )
}