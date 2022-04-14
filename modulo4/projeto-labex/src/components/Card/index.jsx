import React from 'react'

import * as Styled from './styles'

const Card = (props) => {
    return (
        <Styled.Container width={props.width} height={props.height} textAlign={props.textAlign} >
            {props.children}
        </Styled.Container>
    )
}

export default Card