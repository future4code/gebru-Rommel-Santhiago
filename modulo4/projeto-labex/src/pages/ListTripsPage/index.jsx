import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goApplicationForm, goBack } from '../../routes/coordinator'

export const ListTrips = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => goApplicationForm(navigate)}>Formulário</button> 
      <button onClick={() => goBack(navigate)}>Home</button>
    </>
  )
}
