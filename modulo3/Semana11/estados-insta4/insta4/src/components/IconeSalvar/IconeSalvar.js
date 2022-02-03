import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
    margin-left: 10em;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeSalvar(props) {
    return <IconContainer>
        <IconImage alt={'Save'} src={props.icone} onClick={props.onClickSave}/>
    </IconContainer>
}