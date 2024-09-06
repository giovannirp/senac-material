import { useEffect, useState } from "react";

export default function Pessoas() {
  // useState do react é para gerenciar o estado dos usuários
  const [usuarios, setUsuarios] = useState([]);

  //  Hook useEffect para lidar com efeitos colaterais no componente
  useEffect(() => {
    fetch("http://localhost:7000/pessoas")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("error usuários", error));
  }, []);

  console.log(usuarios);

  return (
    <div className="container">
      <h1>Pessoas</h1>

      <div>
        {usuarios.map((user, index) => {
          return (
            <div key={index}>
              <strong>Nome: {user.nome}</strong><br/>
              <strong>Email: {user.email}</strong><br/>
              <strong>Tefone: {user.telefone}</strong><hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
