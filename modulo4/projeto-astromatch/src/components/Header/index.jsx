import React, { useState, useEffect}from 'react'

import Logo from '../../img/logo.png'
import iconMatchs from '../../img/matchs.svg'
import iconUsers from '../../img/users.svg'
import * as Styled from './style'

function Header (props) {
    const [icon, setIcon] = useState(iconMatchs)
    const [color, setColor] = useState('white')

    let swipe = props.swipe

    useEffect(() => {
        swipeMode(swipe)  
    }, [swipe])

    const swipeIcon = () => {
        if(props.show === true){
            setIcon(iconMatchs)
        } else {
            setIcon(iconUsers)
        }
    }

    const swipeMode = (swipe) => {        
        if(swipe === true){
            setColor('white')
        } else {
            setColor('#000000e8') 
        }
    }

    return (
        <Styled.Container backgroundColor={color}>
            <Styled.Img 
                src={Logo} alt='Logo'
                width={'150px'}
                height={'50px'} 
                marginLeft={'20px'}
            />
            <Styled.Button type="button" onClick={() => props.handleShow(swipeIcon())}>
                <Styled.Img 
                    src={icon} alt='matchs'
                    width={'40px'}
                    height={'40px'}
                />
            </Styled.Button>
        </Styled.Container>
    )
}

export default Header