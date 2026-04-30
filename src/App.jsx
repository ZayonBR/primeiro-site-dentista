import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import EspecialidadesPage from './pages/EspecialidadesPage';
import InclusaoTEAPage from './pages/InclusaoTEAPage';
import ContatoPage from './pages/ContatoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/especialidades" element={<Layout><EspecialidadesPage /></Layout>} />
      <Route path="/inclusao-tea" element={<Layout><InclusaoTEAPage /></Layout>} />
      <Route path="/contato" element={<Layout><ContatoPage /></Layout>} />
    </Routes>
  );
}

export default App;
