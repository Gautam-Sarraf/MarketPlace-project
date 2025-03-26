import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './Home/homepage';
import './App.css';
import { Login } from '@mui/icons-material';
import LoginPage from './login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
