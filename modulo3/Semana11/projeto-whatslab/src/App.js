import React from 'react';
import styled from 'styled-components'
import AppContent from './components/AppContent/AppContent'

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0;
`

function App() {
  return (
    <AppContainer>
      <AppContent />
    </AppContainer>
  )
}

export default App;