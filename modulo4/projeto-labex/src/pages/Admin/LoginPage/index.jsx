import React, { useState } from 'react'
import axios from 'axios'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToAdminPage, goToHome } from '../../../routes/coordinator'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = () => {
    // user: astrodev@gmail.com.br  password: 123456
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rommel-gebru/login";
    const body = {
      email,
      password
    };

    axios
      .post(URL, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToAdminPage(navigate);
      })
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
  };
  // para deslogar: limpar o token
  // localStorage.removeItem("token");


  return (
    <>
      <div>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onSubmitLogin}>Enviar</button>
      </div>
      <button onClick={() => goToAdminPage(navigate)}>Inicio admin</button>
      <button onClick={() => goToHome(navigate)}>Home</button>
    </>
  )
}
