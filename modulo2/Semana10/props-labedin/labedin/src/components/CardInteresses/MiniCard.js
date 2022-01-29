import React from "react";
import styled from "styled-components";

const Link = styled.a`
    color: black;
    text-decoration: none;
    &:visited, &:link {
        text-decoration: none;
    }
`

const DivMiniCard = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
`

const ImgMiniCard = styled.img`
    width: 100px;
`

const MiniCard = (props) => {
    return (
        <DivMiniCard>
            <Link href={props.link}>
                <ImgMiniCard src={ props.imagem } alt=""/>
                <h5>{ props.title }</h5>
            </Link>
        </DivMiniCard>
    )
}

export default MiniCard