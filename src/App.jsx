import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Category from './components/Category';
import './App.css';
import AboutGame from './pages/AboutGame';
import WelcomeGame from './pages/WelcomeGame';
import AboutCompany from './pages/AboutCompany';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:category" element={<Game />} />
        <Route path="/el-juego" element={<WelcomeGame />} />
        <Route path="/el-juego/category" element={<Category />} />
        <Route path="/el-juego/acerca-de-interconectados/juego" element={<AboutGame />} />
        <Route path="/acerca-de-interconectados" element={<AboutCompany />} />
      </Routes>
    </Router>
  );
}

export default App;
