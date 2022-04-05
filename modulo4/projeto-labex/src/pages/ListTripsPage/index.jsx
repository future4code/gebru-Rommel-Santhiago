import React from 'react'

import * as Styled from './styles'
import { useRequestData } from '../../Hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToApplicationForm, goToBack } from '../../routes/coordinator'

export const ListTrips = () => {

  const [ trips, isLoading, error ] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips'
  )

  const listTrips = trips && trips.map((trip) => {
      return <Styled.Card key={trip.planet}>
        <p><Styled.Span>Nome:</Styled.Span> {trip.name}</p>
        <p><Styled.Span>Descrição:</Styled.Span> {trip.description}</p>
        <p><Styled.Span>Planeta:</Styled.Span> {trip.planet}</p>
        <p><Styled.Span>Duração:</Styled.Span> {trip.durationInDays} <Styled.Span>dias</Styled.Span></p>
        <p><Styled.Span>Data:</Styled.Span> {trip.date}</p>
      </Styled.Card>
    })

  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Buttons>
          <Styled.Button 
            onClick={() => goToBack(navigate)}
          >
            Voltar
          </Styled.Button>
          <Styled.Button
            onClick={() => goToApplicationForm(navigate)}
          >
            Inscrever-se
          </Styled.Button> 
        </Styled.Buttons>
        <Styled.Title>Lista de viagens</Styled.Title>
        {listTrips}
      </Styled.Content>
    </Styled.Container>
  )
}
