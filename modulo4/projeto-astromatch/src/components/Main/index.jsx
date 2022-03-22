import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as Styled from './style'

//import {chooseProfile, clearSwipes, getProfileToSwipe} from '../../actions/profiles'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rommel/'

const headers = {
    headers: {
        Authorization: 'rommel-santhiago-gebru'
    }
}

const Main = () => {

    const [profileToSwipe, setProfileToSwipe] = useState('')
    const [animationDirection, setAnimationDirection] = useState(null)

    useEffect(() => {
		if (!profileToSwipe) {
			getProfileToChoose()
		}
	}) 

    const getProfileToChoose = () => {
        axios.get(`${url}person`, headers)
        .then(res => {
            setProfileToSwipe(res.data.profile)
        })
    }

    const onChooseOption = (option) => () => {
		let currentAnimation = option === 'dislike' ? Styled.swipeRight : Styled.swipeLeft

		if (animationDirection === null) {
			setAnimationDirection(currentAnimation)
		}
        
        console.log( animationDirection)
		
        if (profileToSwipe) {
			chooseProfile(profileToSwipe.id, option === 'like')
		}

        
	}

    const chooseProfile = (id, choice) => {
        if(!id) {
            getProfileToChoose()
            return
        }
    
        axios.post(`${url}choose-person`, {
            id,
            choice
        })
    
        getProfileToChoose()
    }

    return (
        <Styled.Container>
            <Styled.Content animation={animationDirection}>
                <Styled.Img src={profileToSwipe.photo} alt='Matchs' />
                <Styled.ContentText>
                    <Styled.Title>{profileToSwipe.name}, {profileToSwipe.age}</Styled.Title>
                    <Styled.Bio>{profileToSwipe.bio}</Styled.Bio>
                </Styled.ContentText>
            </Styled.Content>
            <Styled.Buttons>
                <Styled.Button onClick={onChooseOption('dislike')} option='dislike' color={'red'} borderColor={'red'}>X</Styled.Button>
                <Styled.Button onClick={onChooseOption('like')} option='like' color={'green'} borderColor={'green'}>♡</Styled.Button>
            </Styled.Buttons>
        </Styled.Container>
    )
}

export default Main