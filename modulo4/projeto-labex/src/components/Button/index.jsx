import React from 'react'
import * as Styled from './styles'

const Button = (props) => {
    return (
        <Styled.Button
            onClick={props.onClick}
            width={props.width}
            color={props.color}
            background={props.background}
            hoverBg={props.hoverBg}
            hoverColor={props.hoverColor}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            {props.children}
        </Styled.Button>
    )
}

export default Button