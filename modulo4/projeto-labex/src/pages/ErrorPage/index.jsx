import React from 'react'
import * as Styled from './styles'
import errorImg from '../../img/error.jpg'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../routes/coordinator'

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <Styled.Container>
            <button onClick={() => goToBack(navigate)}>Voltar para o inicio</button>
            <Styled.Title>Erro pagina não encontrada</Styled.Title>
            <Styled.Img src={errorImg} alt='error' />
        </Styled.Container>
    )
}

export default ErrorPage