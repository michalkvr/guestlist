import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.component';
import Dashboard from './routes/dashboard/dashboard.component';
import Reservations from './routes/reservations/reservations.component';

import 'primereact/resources/themes/lara-light-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout content={<Dashboard />} />} />
      <Route path='/reservations' element={<Layout content={<Reservations />} />} />
    </Routes>
  );
}

export default App;
