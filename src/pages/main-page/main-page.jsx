import React from 'react';
import { MainContainer } from '../../styles/containerStyle';
import Header from '../../components/Header';
import MapBlock from '../../components/MapBlock';

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <div style={{ height: 'calc(100vh - 280px)' }}>
          <MapBlock />
        </div>
      </MainContainer>
    </>
  );
};
