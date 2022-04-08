import React, { useState } from 'react'
import axios from 'axios'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToAdminPage, goToHome } from '../../../routes/coordinator'
import useForm from '../../../Hooks/useForm'
import Button from '../../../components/Button'

export const Login = () => {
  const { form, onChange } = useForm({email: '', password: ''})
  const navigate = useNavigate()

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/login"

    axios
      .post(URL, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToAdminPage(navigate)
      })
      .catch((err) => {
        console.log("ERRO:", err.response)
      })
  }


  return (
    <Styled.Container>
      <Styled.Buttons>
        <Button 
          onClick={() => goToAdminPage(navigate)}
          width={'150px'}
          color={'#CCCCCC'}
          background={'#666666'}
          hoverBg={'#CCCCCC'}
          hoverColor={'#4D4D4D'}
        >
          Inicio admin
        </Button>
        <Button 
          onClick={() => goToHome(navigate)}
          width={'100px'}
          color={'#CCCCCC'}
          background={'#666666'}
          hoverBg={'#CCCCCC'}
          hoverColor={'#4D4D4D'}
        >
          Home
        </Button>
      </Styled.Buttons>
      <Styled.Title>Pagina de Login</Styled.Title>
      <Styled.Form onSubmit={onSubmitLogin}>
        <input
          name={"email"}
          placeholder="email"
          type={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          name={"password"}
          placeholder="password"
          type={"password"}
          value={form.password}
          onChange={onChange}
          required
          pattern={"^[0-9]{6,}"}
          title={"No minimo 6 digitos numericos"}
        />
        <Button
          width={'100px'}
          color={'#CCCCCC'}
          background={'#666666'}
          hoverBg={'#CCCCCC'}
          hoverColor={'#4D4D4D'}
        >
          Enviar
        </Button>
      </Styled.Form>
    </Styled.Container>
  )
}
