import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import * as Styled from './styles'
import { goToBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../Hooks/useProtectedPage'
import Button from '../../../components/Button'
import Card from '../../../components/Card'

export const TripDetails = () => {
  const [trip, setTrip] = useState(null)
  const [decision, setDecision] = useState('')
  const [candidateId, setCandidateId] = useState('')
  const [tripId, setTripId] = useState('')
  const params = useParams()
  const navigate = useNavigate()
  useProtectedPage()

  useEffect(() => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trip/${params.id}`
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    axios
      .get(URL, headers)
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        console.log('ERRO: ', err.response.message)
      })
  }, [])

  const decideCandidate = (e) => {
    e.preventDefault()
      const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips/${tripId}/candidates/${candidateId}/decide`
      const headers = {
        headers: {
          auth: localStorage.getItem('token')
        }
      }
      const body = {
        approve: decision
    }
      
      axios.put(URL, body, headers)
      .then((res) => {
        alert('Decisão registrada com sucesso!')
        window.location.reload(false)
      })
      .catch((err) => {
        console.log('ERRO: ', err.response.message)
      })
  }

  const onChangeCandidate = (e) => {
    setDecision(e.target.value)
    setCandidateId(e.candidate.id)
    setTrip(e.trip.id)
  }
  
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>{trip && trip.name}</Styled.Title>
        <p><Styled.Span>Nome:</Styled.Span> {trip && trip.name}</p>
        <p><Styled.Span>Descrição:</Styled.Span> {trip && trip.description}</p>
        <p><Styled.Span>Planeta:</Styled.Span> {trip && trip.planet}</p>
        <p><Styled.Span>Duração:</Styled.Span> {trip && trip.durationInDays} <Styled.Span>dias</Styled.Span></p>
        <p><Styled.Span>Data:</Styled.Span> {trip && trip.date}</p>
      </Styled.Content>
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
      <Styled.Title>Candidatos pendentes</Styled.Title>
      <Styled.ContentCandidate>
          {trip && (trip.candidates.length > 0) ? trip.candidates.map((candidate) => 
            <Card key={candidate.id}>
              <p><Styled.Span>Nome: </Styled.Span>{candidate.name}</p>
              <p><Styled.Span>Profissão: </Styled.Span>{candidate.profession}</p>
              <p><Styled.Span>Idade: </Styled.Span>{candidate.age}</p>
              <p><Styled.Span>Pais: </Styled.Span>{candidate.country}</p>
              <p><Styled.Span>Texto de Candidatura:</Styled.Span>{candidate.applicationText}</p>
              <Styled.Form onSubmit={decideCandidate}>
                <Button 
                  onChange={onChangeCandidate} 
                  onClick={() => setDecision('true', setCandidateId(candidate.id), setTripId(trip.id))}
                  width={'100px'}
                  color={'#CCCCCC'}
                  background={'#666666'}
                  hoverBg={'green'}
                  hoverColor={'whitesmoke'}
                >Aprovar</Button>
                <Button 
                  onChange={onChangeCandidate} 
                  onClick={() => setDecision('false', setCandidateId(candidate.id), setTripId(trip.id))}
                  width={'100px'}
                  color={'#CCCCCC'}
                  background={'#666666'}
                  hoverBg={'red'}
                  hoverColor={'whitesmoke'}
                >Reprovar</Button>
              </Styled.Form>
            </Card> )
            : <p>Não há candidatos pendentes</p>
          }
      </Styled.ContentCandidate>
      <Styled.Title>Candidatos aprovados</Styled.Title>
      <Styled.ContentCandidate>
        {trip && (trip.approved.length > 0) ? trip.approved.map((candidate) => {
          return <Card key={candidate.id}>
              <p><Styled.Span>Nome: </Styled.Span>{candidate.name}</p>
              <p><Styled.Span>Profissão: </Styled.Span>{candidate.profession}</p>
              <p><Styled.Span>Idade: </Styled.Span>{candidate.age}</p>
              <p><Styled.Span>Pais: </Styled.Span>{candidate.country}</p>
              <p><Styled.Span>Texto de Candidatura:</Styled.Span>{candidate.applicationText}</p>
          </Card>
        }) : <p>Não há candidatos aprovados</p>}
      </Styled.ContentCandidate>
    </Styled.Container>
  )
}