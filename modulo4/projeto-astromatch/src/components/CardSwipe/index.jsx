import React from 'react'

import * as Styled from './style'

const CardSwipe = (props) => {
    const { animationDirection: animation } = props
    return (
        <Styled.Content animation={animation}>
            <Styled.Img src={props.profileToSwipe.photo} alt='Profile' height={'95%'}/>
            <Styled.ContentText>
                <Styled.Title>{props.profileToSwipe.name}, {props.profileToSwipe.age}</Styled.Title>
                <Styled.Bio>{props.profileToSwipe.bio}</Styled.Bio>
            </Styled.ContentText>
        </Styled.Content>
    )
}

export default CardSwipe