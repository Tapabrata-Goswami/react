import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar.jsx/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index excet element={<Home />} />
        <Route element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App