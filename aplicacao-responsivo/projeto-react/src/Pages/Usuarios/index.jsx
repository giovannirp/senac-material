import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./usuarios.css"

export default function Usuarios() {
  //UseState do React para gerenciar o estado dos usuários
  const [usuarios, setUsuarios] = useState([]);

  // Hook useEffect para lidar com efeitos colaterais no componente
  useEffect(() => {
    fetch("http://localhost:7000/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  console.log(usuarios);

  return (
    <main className="container">
      <h1>Contato</h1>
      <Link to="/">Voltar para Home</Link>
      <br /> <br />
      <div>
        {usuarios.map((user) => (
          <div key={user.id}>
            <strong>Nome: {user.nome}</strong>
            <strong>Telefone: {user.telefone}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
