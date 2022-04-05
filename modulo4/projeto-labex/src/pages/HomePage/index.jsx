import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'
import { goToAbout, goToTripsList, goToLogin, goToAdminPage } from '../../routes/coordinator'

import * as Styled from './styles'
import BgImg from '../../img/background.png'
import adminGrey from '../../img/adminGrey.png'
import adminRed from '../../img/adminRed.png'
import ArrowDown from '../../img/down-arrow.svg'
import Card from '../../components/Card'

export const Home = () => {
    const navigate = useNavigate()

    const [iconAdm, setIconAdmin] = useState(adminGrey)

    const link = (page) => {
        const token = localStorage.getItem("token")

        if (token === null) {
          page = goToLogin(navigate);
        } else {
          page = goToAdminPage(navigate)
        }

        return page
    }


    return (
        <div>
            <Styled.Header img={BgImg}>
                <Styled.Buttons>
                    <Styled.Button
                        onClick={() => goToAbout(navigate)}
                        color={'#4D4D4D'}
                        background={'#CCCCCC'}
                        hoverBg={'#666666'}
                        hoverColor={'#CCCCCC'}
                    >
                        Sobre
                    </Styled.Button>
                    <Styled.Button
                        onClick={() => link()}
                        color={'#CCCCCC'}
                        background={'#666666'}
                        hoverBg={'#CCCCCC'}
                        hoverColor={'red'}
                        onMouseEnter={() => setIconAdmin(adminRed)}
                        onMouseLeave={() => setIconAdmin(adminGrey)}
                    >
                       <Styled.AdminIcon src={iconAdm} /> Admin
                    </Styled.Button>
                </Styled.Buttons>
            </Styled.Header>
            <Styled.Main>
                <Styled.ContentMain>
                    <Card>New York</Card>
                    <Card>Italy</Card>
                    <Card>France</Card>
                </Styled.ContentMain>
                <Styled.ArrowDown src={ArrowDown} alt='Arrow Dow' />
                <Styled.ButtonMore
                    onClick={() => goToTripsList(navigate)}
                    color={'#4D4D4D'}
                    background={'#CCCCCC'}
                    hoverBg={'#666666'}
                    hoverColor={'#CCCCCC'}
                >
                    Mais viagens
                </Styled.ButtonMore>
            </Styled.Main>
            <Styled.Footer>
                <Styled.Title>&copy; Copyright 2022, Rommel, Turma: Gebru Labenu All rights reserved.</Styled.Title>
            </Styled.Footer>
        </div>
    )
}