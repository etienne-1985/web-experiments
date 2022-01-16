import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modules from "./modules";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Modules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
