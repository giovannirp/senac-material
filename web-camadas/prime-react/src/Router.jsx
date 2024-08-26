import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;