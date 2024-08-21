import React from 'react';

import { MainPage, StartPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './shared/styles';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/ip-tracker" element={<StartPage />} />
        <Route path="/ip-tracker/main" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
