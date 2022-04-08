import React from 'react'

import * as Styled from './styles'

const Card = (props) => {
    return (
        <Styled.Container>
            {props.children}
        </Styled.Container>
    )
}

export default Card