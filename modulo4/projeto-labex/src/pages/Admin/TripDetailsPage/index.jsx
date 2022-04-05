import React, { useState, useEffect}from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import * as Styled from './styles'
import { goToBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../Hooks/useProtectedPage'

export const TripDetails = () => {
  const [nameTrip, setNameTrip] = useState()
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
        setNameTrip(res.data.trip)
      })
      .catch((err) => {
        console.log('ERRO: ', err.response)
      })
  }, [])

  return (
    <Styled.Container>
      <Styled.Content>
        <h1>{nameTrip && nameTrip.candidates[0].name}</h1>
        <p><Styled.Span>Nome:</Styled.Span> {nameTrip && nameTrip.candidates[0].name}</p>
        <p><Styled.Span>Descrição:</Styled.Span> {nameTrip && nameTrip.description}</p>
        <p><Styled.Span>Planeta:</Styled.Span> {nameTrip && nameTrip.planet}</p>
        <p><Styled.Span>Duração:</Styled.Span> {nameTrip && nameTrip.durationInDays} <Styled.Span>dias</Styled.Span></p>
        <p><Styled.Span>Data:</Styled.Span> {nameTrip && nameTrip.date}</p>
      </Styled.Content>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <h1>Candidatos pendentes</h1>
    </Styled.Container>
  )
}