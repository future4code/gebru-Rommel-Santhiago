import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as Styled from './style'

import { GlobalStyle } from '../../GlobalStyle'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Matchs from '../../components/Matchs'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rommel-santhiago-gebru/'

const Home = () => {
    const [matches, setMatches] = useState([])
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        if(getMatches){
            getMatches()
        }
    })

    const getMatches = async () => {
        await axios.get(`${url}matches`)
        .then(res => {
            setMatches(res.data.matches)
        })
    }
    
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <Styled.Container >
            <GlobalStyle />
            <Header handleShow={handleShow} />
            <Styled.Content>
                <Main />
                <Matchs show={show}>
                    <Styled.List>
                        {matches && matches.map((match) => (
                            <Styled.ListItem key={match.name}>
                                <Styled.Avatar src={match.photo}/>
                                <Styled.ListText>{match.name}</Styled.ListText>
                            </Styled.ListItem>
                        ))}
                    </Styled.List>
                </Matchs>
            </Styled.Content>
        </Styled.Container>
    )
}

export default Home