import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goAdminCreateTrip, goBack } from '../../../routes/coordinator'

export const TripDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => goAdminCreateTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => goBack(navigate)}>Página anterior</button>
    </>
  );
};
