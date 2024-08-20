import React from 'react';

import { MainPage, StartPage } from './pages';
import { GlobalStyles } from './styles/globalStyle';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
