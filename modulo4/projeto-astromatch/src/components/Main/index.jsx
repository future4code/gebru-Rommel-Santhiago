import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as Styled from './style'
import { Loader } from './Load'
import CardSwipe from '../CardSwipe'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rommel-santhiago-gebru/'

const headers = {  
    header: {
      'Authorization': 'rommel-santhiago-gebru' 
    }
}

const Main = () => {

    const [profileToSwipe, setProfileToSwipe] = useState(null)
    const [animationDirection, setAnimationDirection] = useState(null)
    const [noProfile, setNoProfile] = useState(null)

    useEffect(() => {
		if (!profileToSwipe && noProfile === null) {
			getProfileToChoose()
		}
	}) 

    const getProfileToChoose = ()  => {
        axios.get(`${url}person`, headers)
        .then(res => {
            setProfileToSwipe(res.data.profile)
        })
        .catch(err => {
            setNoProfile(err)
        })
    }

    const onChooseOption = (option) => () => {
		let currentAnimation = option === 'dislike' ? Styled.swipeRight : Styled.swipeLeft

		if (animationDirection === null) {
			setAnimationDirection(currentAnimation)
            setTimeout(() => {setAnimationDirection(null)}, 1000)
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
            <CardSwipe 
                profileToSwipe={profileToSwipe}
                animationDirection={animationDirection}
            />
            : <Loader/>
            }
            <Styled.Buttons>
                <Styled.Button
                    onClick={onChooseOption('dislike')} 
                    option='dislike'
                    color={'red'}
                    backgroundHover={'red'}
                    colorHover={'white'}
                    paddingBottom={'6px'}
                >x</Styled.Button>

                <Styled.Button 
                    onClick={onChooseOption('like')} 
                    option='like'
                    color={'green'}
                    backgroundHover={'green'}
                    colorHover={'white'}
                >♥</Styled.Button>
            </Styled.Buttons>
        </Styled.Container>
    )
}

export default Main