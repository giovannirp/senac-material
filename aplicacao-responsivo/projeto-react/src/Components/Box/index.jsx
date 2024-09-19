import React from "react";
import img1 from "../../assets/img/img-1.jpg";

import "./box.css";

export default function Box() {
  return (
    <div className="container">
      <img src={img1} alt="Exemplo" className="image" />
      <h1 className="title">Título do Componente</h1>
      <p className="description">
        Este é um parágrafo de exemplo para o componente. Você pode colocar aqui
        qualquer texto que desejar.
      </p>
    </div>
  );
}
