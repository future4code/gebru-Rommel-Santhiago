import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as Styled from './styles'
import { useRequestData } from '../../../Hooks/useRequestData'
import { goToAdminTripDetails, goToAdminCreateTrip, goToHome } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../Hooks/useProtectedPage'
import Button from '../../../components/Button'

export const AdminPage = () => {
  const navigate = useNavigate()
  const [ trips ] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips'
  )
  useProtectedPage()

  const Details = trips && trips.map((trip) => {
    return <Styled.Trips id={trip.id} key={trip.id}>
      <Styled.Button onClick={() => link(trip.id)}>{trip.name}</Styled.Button>
      <Styled.DeleteButton />
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
      <Styled.Title>Painel Administrativo</Styled.Title>
      <Styled.Buttons>
        <Button 
          onClick={() => goToAdminCreateTrip(navigate)}
          width={'150px'}
          color={'#CCCCCC'}
          background={'#666666'}
          hoverBg={'#CCCCCC'}
          hoverColor={'#4D4D4D'}
        >
          Criar Viagem
        </Button>
        <Button 
          onClick={() => goToHome(navigate)}
          width={'150px'}
          color={'#CCCCCC'}
          background={'#666666'}
          hoverBg={'#CCCCCC'}
          hoverColor={'#4D4D4D'}
        >
          Home
        </Button>
        <Button 
          onClick={logout}
          width={'150px'}
          color={'#CCCCCC'}
          background={'#666666'}
          hoverBg={'#CCCCCC'}
          hoverColor={'#4D4D4D'} 
        >
          Sair
        </Button>
      </Styled.Buttons>
      {Details}
    </Styled.Container>
  )
}