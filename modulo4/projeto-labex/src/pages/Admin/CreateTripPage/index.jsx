import {useNavigate} from 'react-router-dom'

import * as Styled from './styles'
import { goToBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../Hooks/useProtectedPage'

export const CreateTrip = () => {
  const navigate = useNavigate()
  useProtectedPage();

  return (
    <button onClick={() => goToBack(navigate)}>Página anterior</button>
  )
}