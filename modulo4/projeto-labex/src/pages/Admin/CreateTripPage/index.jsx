import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import * as Styled from './styles'
import { goToBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../Hooks/useProtectedPage'
import Button from '../../../components/Button'
import useForm from '../../../Hooks/useForm'
import { planets } from '../../../constants/planets'

export const CreateTrip = () => {
  const { form, onChange, cleanFields } = useForm({name: '', planet: '', date: '', description: '', durationInDays: ''})
  const navigate = useNavigate()
  useProtectedPage()

  const onSubmitTrip = (e) => {
    e.preventDefault()
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/trips`
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }

    axios
      .post(URL, form, headers)
      .then((res) => {
        alert("Viagem cadastrada com sucesso!")
        cleanFields()
      })
      .catch((err) => {
        console.log('ERRO: ', err.response.message)
      })
  }

  return (
    <Styled.Container>
      <Styled.Title>Criar viagem</Styled.Title>
      <Styled.Form onSubmit={onSubmitTrip}>
        <Styled.Input 
          type="text" 
          name={'name'} 
          placeholder='Nome da viagem' 
          value={form.name}
          onChange={onChange}
          required
        />
        <Styled.Select 
          placeholder={"planeta"}
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          required
        >
          <option value='' disabled>Escolha um planeta</option>
          {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
        </Styled.Select>
        <Styled.Input 
          type='date' 
          name='date' 
          placeholder='dd/mm/aaaa'
          value={form.date}
          onChange={onChange}
          required
        />
        <Styled.Input 
          type='text' 
          name='description' 
          placeholder='Descrição' 
          value={form.description}
          onChange={onChange}
          required
          pattern={'^.{20,}$'}
          title={"O texto deve ter no mínimo 20 caracteres"}
        />
        <Styled.Input 
          type='number' 
          name='durationInDays' 
          placeholder='Duração em dias' 
          value={form.durationInDays}
          onChange={onChange}
          required
          min={1}
        />
        <Styled.Buttons>
          <Button 
            onClick={() => goToBack(navigate)}
            width={'100px'}
            color={'#CCCCCC'}
            background={'#666666'}
            hoverBg={'#CCCCCC'}
            hoverColor={'#4D4D4D'}
          >Voltar</Button>
          <Button
            width={'100px'}
            color={'#CCCCCC'}
            background={'#666666'}
            hoverBg={'#CCCCCC'}
            hoverColor={'#4D4D4D'}
          >Enviar</Button>
        </Styled.Buttons>
      </Styled.Form>
    </Styled.Container>
  )
}