import React from 'react'

import * as Styled from './styles'
import { useRequestData } from '../../Hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToApplicationForm, goToBack } from '../../routes/coordinator'
import Button from '../../components/Button'
import Card from '../../components/Card'

export const ListTrips = () => {

  const [ trips ] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips'
  )

  const listTrips = trips && trips.map((trip) => {
      return <Card key={trip.id} width={'400px'}>
        <p><Styled.Span>Nome:</Styled.Span> {trip.name}</p>
        <p><Styled.Span>Descrição:</Styled.Span> {trip.description}</p>
        <p><Styled.Span>Planeta:</Styled.Span> {trip.planet}</p>
        <p><Styled.Span>Duração:</Styled.Span> {trip.durationInDays} <Styled.Span>dias</Styled.Span></p>
        <p><Styled.Span>Data:</Styled.Span> {trip.date}</p>
      </Card>
    })

  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Styled.Title>Lista de viagens</Styled.Title>
      <Styled.Content>
        <Styled.Buttons>
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
          <Button
            onClick={() => goToApplicationForm(navigate)}
            width={'150px'}
            color={'#CCCCCC'}
            background={'#666666'}
            hoverBg={'#CCCCCC'}
            hoverColor={'#4D4D4D'}
          >
            Inscrever-se
          </Button> 
        </Styled.Buttons>
        {listTrips}
      </Styled.Content>
    </Styled.Container>
  )
}
