import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './routes/dashboard/dashboard.component';
import Reservations from './routes/reservations/reservations.component';

import 'primereact/resources/themes/lara-light-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route path='/reservations' element={<Reservations />} />
      </Route>
    </Routes>
  );
}

export default App;
