import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'

export const About = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => goBack(navigate)}>Home</button>
  )
}