import React from 'react';
import { DivButtonContainer, ImageButton } from './Styled'

function ImagemButton(props) {
    return (
        <DivButtonContainer>
            <ImageButton src={ props.imagem } alt='' />
            <p>{ props.texto }</p>
        </DivButtonContainer>

    )
}

export default ImagemButton;