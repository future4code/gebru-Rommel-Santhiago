import React from 'react'
import * as Styled from './style'

import { GlobalStyle } from '../../GlobalStyle'
import Header from '../../components/Header'
import Main from '../../components/Main'

const Home = () => {
    return (
        <Styled.Container>
            <GlobalStyle />
            <Header />
            <Main />
        </Styled.Container>
    )
}

export default Home