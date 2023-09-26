import React from 'react';
import { GlobalStyles } from './styles/globalStyle';
import { MainContainer } from './styles/containerStyle';
import Header from './components/Header';
import MapBlock from './components/MapBlock';

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Header />
        <MapBlock />
      </MainContainer>
    </>
  );
}

export default App;
