import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Pessoas from "./Pages/Pessoas";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/pessoas" element={<Pessoas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;