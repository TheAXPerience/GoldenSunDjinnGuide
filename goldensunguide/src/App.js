import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import GuidePage from './pages/guidepage.js';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/goldensun' element={<GuidePage game='goldensun' />} />
            <Route path='thelostage' element={<GuidePage game='thelostage' />} />
            <Route path='darkdawn' element={<GuidePage game='darkdawn' />} />
        <Routes />
    <Router />
  );
}

export default App;
