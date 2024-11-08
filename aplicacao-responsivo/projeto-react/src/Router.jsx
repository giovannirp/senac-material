import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Nav from './Components/Nav'
import NotFound from './Pages/NotFound'
import Contato from './Pages/Contato'
import ListPeople from './Pages/ListPeople'
import Usuarios from './Pages/Usuarios'
import CadastroUsuario from './Pages/Cadastro'

export default function Router() {
    return (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/listPeople" element={<ListPeople />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )
}
