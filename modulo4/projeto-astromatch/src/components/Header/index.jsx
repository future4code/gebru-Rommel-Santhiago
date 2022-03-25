import React from 'react'

import Logo from '../../img/logo.png'
import * as Styled from './style'

function Header (props) {

    return (
        <Styled.Container>
            <Styled.Img src={Logo} alt='Logo' />
            <Styled.Button type="button" onClick={props.handleShow}>
                Matchs
            </Styled.Button>
        </Styled.Container>
    )
}

export default Header