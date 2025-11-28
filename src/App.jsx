import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './Page/Home';
import Favourite from './Page/Favourite';
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';

function App() {
  const movieNumber = 2;

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
