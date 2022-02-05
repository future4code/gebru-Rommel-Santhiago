import React from 'react'
import styled from 'styled-components'
import WhatsHeader from '../WhatsHeader/WhatsHeader'
import WhatsMain from '../WhatsMain/WhatsMain'

const WhatsContainer = styled.div`
    width: 60vw;
    height: 99.4vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
    border: 2px solid #075E54;
`

export default class AppContent extends React.Component {
    render() {
        return (
            <WhatsContainer>
                <WhatsHeader />
                <WhatsMain />
            </WhatsContainer>
        )
    }
}