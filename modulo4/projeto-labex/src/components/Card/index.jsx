import React from 'react'

import * as Styled from './styles'

const Card = (props) => {
    return (
        <Styled.Container>
            <Styled.Title>{props.children}</Styled.Title>
        </Styled.Container>
    )
}

export default Card