import React, { useState }from 'react'
import axios from 'axios'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../routes/coordinator'
import Button from '../../components/Button'
import useForm from '../../Hooks/useForm'
import { useRequestData } from '../../Hooks/useRequestData'
import { countries } from '../../constants/countries'

export const ApplicationForm = () => {
  const { form, onChange, cleanFields } = useForm({name: '', applicationText: '', profession: '', country: '', trip: ''})
  const navigate = useNavigate()
  const [char, setChar] = useState('')
  const [tripId, setTripId] = useState("")
  const [ trips ] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips'
  )

  const allTrip = trips && trips.map((trip) => {
    return (
      <option key={trip.id} value={trip.id}>
        {trip.name}
      </option>
    )
  })

  const onSubmitTrip = (e) => {
    e.preventDefault()
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips/${tripId}/apply`
    
    axios
      .post(URL, form)
      .then((res) => {
        alert("Inscrição efetuada com sucesso!")
        cleanFields()
      })
      .catch((err) => {
        console.log('ERRO: ', err.response.message)
      })
  }

  const onChangeTrip = (e) => {
    setTripId(e.target.value)
  }

  return (
    <Styled.Container>
      <Styled.Title>Inscreva-se para uma viagem</Styled.Title>
      <Styled.Form onSubmit={onSubmitTrip} >
        <Styled.Select defaultValue='' onChange={onChangeTrip} >
          <option value='' disabled>Escolha uma Viagem</option>
          {allTrip}
        </Styled.Select>
        <Styled.Input 
          name={'name'}
          type="text" 
          placeholder="Nome"
          value={form.name}
          onChange={onChange}
          required
        />
        <Styled.Input
          name={'age'}
          type="number" 
          placeholder="Idade"
          value={form.age}
          onChange={onChange}
          required
        />
        <Styled.Input
          name={'applicationText'} 
          type="text" 
          placeholder="Texto de candidatura"
          value={form.applicationText}
          onChange={onChange}
          required
        />
        <Styled.Input
          name={'profession'} 
          type="text" 
          placeholder="Profissão"
          value={form.profession}
          onChange={onChange}
          required
        />
        <Styled.Select
          placeholder={"País"}
          name={"country"}
          value={form.country}
          onChange={onChange}
          required
        >
          <option value='' selected>Escolha um Pais</option>
          {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
        </Styled.Select>
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
            width={'100px'}
            color={'#CCCCCC'}
            background={'#666666'}
            hoverBg={'#CCCCCC'}
            hoverColor={'#4D4D4D'}
            onMouseEnter={() => setChar('➾')}
            onMouseLeave={() => setChar('')}
          >
            Enviar {char}
          </Button> 
        </Styled.Buttons>
      </Styled.Form>
    </Styled.Container>
  )
}
