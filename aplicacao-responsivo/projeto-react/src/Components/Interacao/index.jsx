import React, { useState } from "react";
import "./interacao.css";

export default function Interacao() {
  const [mensagem, setMensagem] = useState('Clique no botão para alterar esta mensagem');
  const [clicado, setClicado] = useState(false);

  const handleClick = () => {
    setMensagem('Mensagem alterada! 🎉');
    setClicado(true);
  };

  return (
    <div className="container">
      <h1>{mensagem}</h1>
      <button onClick={handleClick} className={clicado ? "clicado" : ""}>
        Clique aqui
      </button>
    </div>
  );
}
