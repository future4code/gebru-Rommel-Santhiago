import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as Styled from './styles'
import { useRequestData } from '../../../Hooks/useRequestData'
import { goToAdminTripDetails, goToAdminCreateTrip, goToHome } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../Hooks/useProtectedPage'

export const AdminPage = () => {
  const navigate = useNavigate()
  const [ trips ] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips'
  )
  useProtectedPage()

  const Details = trips && trips.map((trip) => {
    return <Styled.Trips id={trip.id} key={trip.id}>
      <Styled.Button onClick={() => link(trip.id)}>{trip.name}</Styled.Button>
    </Styled.Trips>
  })

  const link = (id) => {
    goToAdminTripDetails(() => navigate(id))
  }

  const logout = () => {
    localStorage.removeItem("token")
    goToHome(navigate)
  }

  return (
    <Styled.Container>
      <h1>Painel Administrativo</h1>
      <div>
        <button onClick={() => goToAdminCreateTrip(navigate)}>Criar Viagem</button>
        <button onClick={() => goToHome(navigate)}>Home</button>
        <button onClick={logout} >Sair</button>
      </div>
      {Details}
    </Styled.Container>
  )
}