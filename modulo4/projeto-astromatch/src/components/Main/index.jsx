import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as Styled from './style'
import { Loader } from './Load'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rommel-santhiago-gebru/'

const Main = () => {

    const [profileToSwipe, setProfileToSwipe] = useState(null)
    const [animationDirection, setAnimationDirection] = useState(null)

    useEffect(() => {
		if (!profileToSwipe) {
			getProfileToChoose()
		}
	}) 

    const getProfileToChoose = async ()  => {
       await axios.get(`${url}person`)
        .then(res => {
            setProfileToSwipe(res.data.profile)
        })
    }

    const onChooseOption = (option) => () => {
		let currentAnimation = option === 'dislike' ? Styled.swipeRight : Styled.swipeLeft

		if (currentAnimation === null) {
			setAnimationDirection(currentAnimation)
		}
		
        if (profileToSwipe) {
			chooseProfile(profileToSwipe.id, option === 'like')
		}
	}

    const chooseProfile = async (id, choice) => {
        if(!id) {
            getProfileToChoose()
            return
        }
    
        await axios.post(`${url}choose-person`, {
            id,
            choice
        })
    
        getProfileToChoose()
    }

    return (
        <Styled.Container>
            {animationDirection !== null && <Loader/>}
            {profileToSwipe ? 
            <Styled.Content animation={animationDirection}>
                <Styled.Img src={profileToSwipe.photo} alt='Profile' height={'95%'}/>
                <Styled.ContentText>
                    <Styled.Title>{profileToSwipe.name}, {profileToSwipe.age}</Styled.Title>
                    <Styled.Bio>{profileToSwipe.bio}</Styled.Bio>
                </Styled.ContentText>
            </Styled.Content>
            : <Loader/>
            }
            <Styled.Buttons>
                <Styled.Button 
                    onClick={onChooseOption('dislike')} 
                    option='dislike' color={'red'} borderColor={'red'}>
                        x
                </Styled.Button>
                <Styled.Button 
                    onClick={onChooseOption('like')} 
                    option='like' color={'green'} borderColor={'green'}>
                        ♡
                </Styled.Button>
            </Styled.Buttons>
        </Styled.Container>
    )
}

export default Main