import React from 'react';
import { BigCardContainer, ImgCard, TitleCard, DivCard } from './Styled'

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImgCard src={ props.imagem } alt='' />
            <DivCard>
                <TitleCard>{ props.nome }</TitleCard>
                <p>{ props.descricao }</p>
            </DivCard>
        </BigCardContainer>
    )
}

export default CardGrande;