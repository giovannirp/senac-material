import  { useEffect, useState } from 'react';
import './contato.css'
import { Link } from 'react-router-dom';
export default function Contato() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fazendo a chamada à API com fetch e utilizando .then() e .catch()
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Converte a resposta para JSON
      .then(data => setUsers(data)) // Atualiza o estado com os dados recebidos
      .catch(error => console.error('Erro ao buscar os usuários:', error));
  }, []);  // O array vazio significa que o useEffect só executa uma vez após o componente montar

  return (
    <div className='container'>
      <Link to="/">Voltar</Link>
      <h1>Contato</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li> // Exibir o nome dos usuários
        ))}
      </ul>
    </div>
  );
}