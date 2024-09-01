import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Category from './components/Category';
import './App.css';
import AboutGame from './pages/AboutGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game/:category" element={<Game />} />
        <Route path="/category" element={<Category />} />
        <Route path="/acerca-de-interconectados/el-juego" element={<AboutGame />} />
        <Route path="/acerca-de-interconectados/visión" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
