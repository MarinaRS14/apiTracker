import React from 'react';

import { MainPage, StartPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './shared/styles';

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
