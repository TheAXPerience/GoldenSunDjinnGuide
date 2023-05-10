import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './pages/header'
import Home from './pages/home.js';
import GuidePage from './pages/guidepage.js';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route
                path='/' exact
                element={<Home />}
            />
            <Route
                path='/goldensun'
                element={<GuidePage game="goldensun" />}
            />
            <Route
                path='/thelostage'
                element={<GuidePage game="thelostage" />}
            />
            <Route
                path='/darkdawn'
                element={<GuidePage game="darkdawn" />}
            />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
