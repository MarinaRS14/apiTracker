import React from 'react';
import Header from '../../components/Header';
import MapBlock from '../../components/MapBlock';
import { MainContainer } from '../../shared/styles';

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
