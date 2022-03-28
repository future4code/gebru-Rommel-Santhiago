import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as Styled from './style'

import { GlobalStyle } from '../../GlobalStyle'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Matchs from '../../components/Matchs'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rommel-santhiago-gebru/matches'

const Home = (props) => {
    const [matches, setMatches] = useState([])
    const [show, setShow] = useState(false)
    const [color, setColor] = useState('whitesmoke')

    let swipe = props.swipe
    
    useEffect(() => {
        getMatches(matches)
    }, [matches])

    useEffect(() => {
        swipeMode(swipe)
    }, [swipe])

    const getMatches = () => {
        axios.get(url)
        .then(res => {
            setMatches(res.data.matches)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const handleShow = () => {
        setShow(!show)
    }

    const swipeMode = (swipe) => {        
        if(swipe === true){
            setColor('whitesmoke')
        } else {
            setColor('#000000cc') 
        }
    }

    return (
        <Styled.Container >
            <GlobalStyle />
            <Header handleShow={handleShow} show={show} swipe={swipe} />
            <Styled.Content backgroundColor={color} >
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