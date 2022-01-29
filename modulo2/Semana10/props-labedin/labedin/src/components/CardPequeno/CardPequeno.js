import React from 'react'
import { LittleCardContainer, ImgCard } from './Styled.js'

function CardPequeno(props) {
    return (
        <LittleCardContainer>
            <ImgCard src={ props.imagem } alt='' />
            <div>
                <h4>{ props.title }: { props.infor }</h4>
            </div>
        </LittleCardContainer>
    )
}

export default CardPequeno