import React from "react";
import Box from "../Components/Box";
import img1 from "../assets/img/img-1.jpg";
import img2 from "../assets/img/img-2.jpg";
import Interacao from "../Components/Interacao";

export default function Home() {
  return (
    <div className="container">
      <div className="d-flex">
        <Box
          title="Título do Componente"
          description="Este é um parágrafo de exemplo para o componente. Você pode colocar aqui
        qualquer texto que desejar."
          imagem={img1}
        />

        <Box
          title="Título do Componente 2"
          description="Este é um parágrafo de exemplo para o componente. Você pode colocar aqui
        qualquer texto que desejar."
          imagem={img2}
        />
      </div>

      <Interacao />
    </div>
  );
}
