import React from 'react'
import axios from 'axios'
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
      <Styled.DeleteButton onClick={() => deleteTrip(trip.id, trip.name)}/>
    </Styled.Trips>
  })

  const link = (id) => {
    goToAdminTripDetails(() => navigate(id))
  }

  const logout = () => {
    localStorage.removeItem("token")
    goToHome(navigate)
  }

  const deleteTrip = (id, name) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips/${id}`
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
      axios
        .delete(URL, headers)
        .then((res) => {
          alert(`Viagem ${name} deletada com sucesso!`)
          window.location.reload(false)
        })
        .catch((err) => {
          console.log("ERRO:", err.response)
        })
    }
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
      <Styled.Subtitle>Lista de viagens</Styled.Subtitle>
      {Details}
    </Styled.Container>
  )
}