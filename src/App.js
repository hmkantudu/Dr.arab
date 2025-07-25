import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;