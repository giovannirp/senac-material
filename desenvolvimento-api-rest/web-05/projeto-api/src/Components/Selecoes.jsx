import { useEffect, useState } from "react";
import "./selecoes.css";

const Selecoes = () => {
  const [selecoes, setSelecoes] = useState([]);

  useEffect(() => {
    // Fazer a chamada à API
    fetch('http://localhost:3000/selecoes')
      .then(response => response.json())
      .then(data => setSelecoes(data))
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }, []); 

  return (
    <div className="container">
      <h1 className="title">Seleções</h1>
      <ul className="list">
        {selecoes.map(selecao => (
          <li key={selecao.id} className="list-item">
            <strong className="selecao-name">{selecao.selecao}</strong> - <span className="grupo">Grupo {selecao.grupo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Selecoes;
