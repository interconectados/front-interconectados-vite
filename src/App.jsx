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
import WelcomeCoaching from './pages/WelcomeCoaching';
import AboutGROW from './pages/AboutGROW'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de-interconectados" element={<AboutCompany />} />
        <Route path="/game/:category" element={<Game />} />
        <Route path="/el-juego" element={<WelcomeGame />} />
        <Route path="/el-juego/categorias" element={<Category />} />
        <Route path="/acerca-de-interconectados/juego" element={<AboutGame />} />
        <Route path="/coaching" element={<WelcomeCoaching />} />
        <Route path="/coaching/grow" element={<AboutGROW />} />
      </Routes>
    </Router>
  );
}

export default App;
