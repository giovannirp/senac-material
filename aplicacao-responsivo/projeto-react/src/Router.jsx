import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Nav from './Components/Nav'
import NotFound from './Pages/NotFound'

export default function Router() {
    return (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )
}
